import { Injectable } from '@nestjs/common';
import { QuestionTypeEnum } from 'src/common/enums/question-type.enum';
import { IDataServices } from 'src/core/abstracts';
import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { QuestionnaireFactoryUseCaseService } from 'src/use-cases/questioninaire-use-cases/questionnaire-factory-use-case.service';
import { ReviewFactoryUseCaseService } from 'src/use-cases/review-use-cases/review-factory-use-case.service';
import { createQuestionnaireDto } from 'src/core/dtos/request/questionnaire.dto';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';
import {
  AppClsStore,
  UserClsData,
} from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { ReviewTypeEnum } from 'src/common/enums/review-type.enum';
import AppException from 'src/application/exception/app.exception';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';

@Injectable()
export class UserReviewUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private reviewFactoryUseCaseService: ReviewFactoryUseCaseService,
    private questionnaireFactroyUseCaseService: QuestionnaireFactoryUseCaseService,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}

  async getMySelfReviews(): Promise<IPaginationData> {
    const userId = this.cls.get<UserClsData>('user')?.id;
    return await this.dataServices.review.getAll({
      reviewer: userId,
      reviewee: userId,
      reviewType: ReviewTypeEnum.SELF,
    });
  }

  async createSelfReview(reviewDto: ReviewDto) {
    const userId = this.cls.get<UserClsData>('user')?.id;

    const inCompleteSelfReviews =
      await this.dataServices.review.getAllWithoutPagination({
        reviewee: userId,
        progressStatus:
          ReviewProgressStatusEnum.PENDING ||
          ReviewProgressStatusEnum.SUBMITTED,
      });
    if (inCompleteSelfReviews.length > 0) {
      throw new AppException(
        { message: `You have already have an incomplete review` },
        'You have already have an incomplete review',
        409,
      );
    }
    const newReview = this.reviewFactoryUseCaseService.createReview({
      ...reviewDto,
      reviewType: ReviewTypeEnum.SELF,
      reviewer: userId,
      reviewee: userId,
      progressStatus: ReviewProgressStatusEnum.PENDING,
    });
    const createdReview = await this.dataServices.review.create(newReview);
    const questions = await this.dataServices.question.getAllWithoutPagination({
      questionType: QuestionTypeEnum.SELF,
    });
    const questionnaires = await Promise.all(
      questions.map(async (question) => {
        const questionnaireDto = new createQuestionnaireDto();
        questionnaireDto.review = createdReview.id;
        questionnaireDto.question = question.questionText;
        return this.questionnaireFactroyUseCaseService.createQuestionnaire(
          questionnaireDto,
        );
      }),
    );
    await this.dataServices.questionnaire.createBulk(questionnaires);
    return createdReview;
  }
}
