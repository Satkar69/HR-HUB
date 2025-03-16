import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { UpdateQuestionnairesDto } from 'src/core/dtos/request/questionnaire.dto';
import { UserReviewQuestionnaireFactoryUseCaseService } from './user-review-questionnaire-factory-use-case.service';
import AppException from 'src/application/exception/app.exception';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';

@Injectable()
export class UserReviewQuestionnaireUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private userReviewQuestionnaireFactoryUseCaseService: UserReviewQuestionnaireFactoryUseCaseService,
  ) {}

  // async updateQuestionnaires(updateQuestionnairesDto: UpdateQuestionnairesDto) {
  //   const questionnaires = updateQuestionnairesDto.questionnaires;
  //   if (questionnaires.length === 0) {
  //     throw new AppException(
  //       { questionnaires: `Questionnaires cannot be empty` },
  //       'Questionnaires cannot be empty',
  //       400,
  //     );
  //   }

  //   const updatingQuestionnaires = [];

  //   questionnaires.map((questionnaire) => {
  //     const editedQuestionnaire =
  //       this.userReviewQuestionnaireFactoryUseCaseService.updateQuestionnaire(
  //         questionnaire,
  //       );
  //     updatingQuestionnaires.push({
  //       id: questionnaire.questionnaireId,
  //       editedQuestionnaire,
  //     });
  //   });

  //   const updatedQuestionnaires = [];
  //   if (updatingQuestionnaires.length > 0) {
  //     await Promise.all(
  //       updatingQuestionnaires.map(async (updatingQuestionnaire) => {
  //         updatedQuestionnaires.push(
  //           await this.dataServices.questionnaire.update(
  //             { id: updatingQuestionnaire.id },
  //             updatingQuestionnaire.editedQuestionnaire,
  //           ),
  //         );
  //       }),
  //     );
  //   }

  //   return updatedQuestionnaires;
  // }

  async updateQuestionnairesByReviewId(
    reviewId: number,
    updateQuestionnairesDto: UpdateQuestionnairesDto,
  ) {
    const { questionnaires } = updateQuestionnairesDto;

    // Validate questionnaires array
    if (!questionnaires.length) {
      throw new AppException(
        { questionnaires: 'Questionnaires cannot be empty' },
        'Questionnaires cannot be empty',
        400,
      );
    }

    const isIncompleteAnswers = questionnaires.some((questionnaire) => {
      return questionnaire.answers.length === 0;
    });
    if (isIncompleteAnswers) {
      throw new AppException(
        { message: `You have some incomplete answers` },
        'You have some incomplete answers',
        400,
      );
    }

    // Process questionnaires in one batch
    await Promise.all(
      questionnaires.map(async (questionnaire) => {
        const editedQuestionnaire =
          this.userReviewQuestionnaireFactoryUseCaseService.updateQuestionnaire(
            questionnaire,
          );

        return this.dataServices.questionnaire.update(
          { id: questionnaire.questionnaireId },
          editedQuestionnaire,
        );
      }),
    );

    return;
  }
}
