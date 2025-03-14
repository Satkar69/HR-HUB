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
      reviewer: { id: userId },
      reviewee: { id: userId },
      reviewType: ReviewTypeEnum.SELF,
    });
  }

  async getMyTeamSelfReviews() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const myTeam = await this.dataServices.team.getOne({
      leader: { id: userId },
    });
    const myTeamMembers =
      await this.dataServices.teamMember.getAllWithoutPagination({
        team: { id: myTeam.id },
      });
    // First get all reviews, including nulls
    const reviewPromises = await Promise.all(
      myTeamMembers.map(async (teamMember) => {
        return await this.dataServices.review.getOneOrNull({
          reviewer: { id: teamMember.member.id },
          reviewType: ReviewTypeEnum.SELF,
        });
      }),
    );
    // Then filter out the nulls
    const selfReviews = reviewPromises.filter((review) => review !== null);

    return selfReviews;
  }

  async createSelfReview(reviewDto: ReviewDto) {
    const userId = this.cls.get<UserClsData>('user')?.id;

    const inCompleteSelfReviews =
      await this.dataServices.review.getAllWithoutPagination({
        reviewer: { id: userId },
        reviewee: { id: userId },
        progressStatus: {
          $in: [
            ReviewProgressStatusEnum.PENDING,
            ReviewProgressStatusEnum.SUBMITTED,
          ],
        },
        reviewType: ReviewTypeEnum.SELF,
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

  async submitReviewById(reviewId: number, reviewDto: ReviewDto) {
    const review = await this.dataServices.review.getOne({ id: reviewId });
    if (review.progressStatus === ReviewProgressStatusEnum.SUBMITTED) {
      throw new AppException(
        { message: `Review already submitted` },
        'Review already submitted',
        400,
      );
    }
    const reviewQuestionnaires =
      await this.dataServices.questionnaire.getAllWithoutPagination({
        review: { id: review.id },
      });
    const isIncompleteAnswers = reviewQuestionnaires.some((questionnaire) => {
      return questionnaire.answers.length === 0;
    });
    if (isIncompleteAnswers) {
      throw new AppException(
        { message: `You have some incomplete answers` },
        'You have some incomplete answers',
        400,
      );
    }
    const updatedReview =
      this.reviewFactoryUseCaseService.updateReviewProgessStatus(reviewDto);
    updatedReview.progressStatus = ReviewProgressStatusEnum.SUBMITTED;
    return await this.dataServices.review.update(
      { id: review.id },
      updatedReview,
    );
  }
}
