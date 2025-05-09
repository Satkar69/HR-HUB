import { Injectable } from '@nestjs/common';
import { QuestionTypeEnum } from 'src/common/enums/question-type.enum';
import { IDataServices } from 'src/core/abstracts';
import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { QuestionnaireFactoryUseCaseService } from 'src/use-cases/questioninaire-use-cases/questionnaire-factory-use-case.service';
import { ReviewFactoryUseCaseService } from 'src/use-cases/review-use-cases/review-factory-use-case.service';
import { CreateQuestionnaireDto } from 'src/core/dtos/request/questionnaire.dto';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';
import {
  AppClsStore,
  UserClsData,
} from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { ReviewTypeEnum } from 'src/common/enums/review-type.enum';
import AppException from 'src/application/exception/app.exception';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';
import { UserReviewQuestionnaireFactoryUseCaseService } from './user-review-questionnaire/user-review-questionnaire-factory-use-case.service';
import { UpdateQuestionnairesDto } from 'src/core/dtos/request/questionnaire.dto';
import { Not } from 'typeorm';
import { UserReviewSummaryFactoryUseCaseService } from './user-review-summary/user-review-summary-factory-use-case.service';
import { CreateReviewSummaryDto } from 'src/core/dtos/review-summary.dto';

@Injectable()
export class UserReviewUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private reviewFactoryUseCaseService: ReviewFactoryUseCaseService,
    private questionnaireFactroyUseCaseService: QuestionnaireFactoryUseCaseService,
    private userReviewQuestionnaireFactoryUseCaseService: UserReviewQuestionnaireFactoryUseCaseService,
    private userReviewSummaryFactoryUseCaseService: UserReviewSummaryFactoryUseCaseService,
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

  async getMyManagerReviews(): Promise<IPaginationData> {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const user = await this.dataServices.user.getOne({ id: userId });
    if (user.role === UserRoleEnum.MANAGER) {
      throw new AppException(
        { message: `Manager users don't have their own manager reviews` },
        `Manager users don't have their own manager reviews`,
        400,
      );
    }
    const myTeamMembership = await this.dataServices.teamMember.getOneOrNull(
      {
        member: { id: userId },
      },
      { team: true },
    );
    if (!myTeamMembership) {
      throw new AppException(
        { message: `You are not a member of any team` },
        'You are not a member of any team',
        404,
      );
    }
    const myTeam = await this.dataServices.team.getOneOrNull({
      id: myTeamMembership.team.id,
    });
    return await this.dataServices.review.getAll({
      reviewer: { id: myTeam.leader.id },
      reviewee: { id: userId },
      reviewType: ReviewTypeEnum.MANAGER,
    });
  }

  async getMyPeerReviewsAsNominee(): Promise<IPaginationData> {
    const userId = this.cls.get<UserClsData>('user')?.id;
    return await this.dataServices.review.getAll({
      reviewer: { id: userId },
      reviewType: ReviewTypeEnum.PEER,
    });
  }

  async getMyTeamSelfReviews() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const myTeam = await this.dataServices.team.getOneOrNull({
      leader: { id: userId },
    });
    if (!myTeam) {
      throw new AppException(
        { message: `You are not not assigned to any team as a leader` },
        'You are not not assigned to any team as a leader',
        404,
      );
    }
    const myTeamMembers =
      await this.dataServices.teamMember.getAllWithoutPagination({
        team: { id: myTeam.id },
      });

    if (myTeamMembers.length === 0) {
      return [];
    }
    const reviewPromises = await Promise.all(
      myTeamMembers.map(async (teamMember) => {
        return await this.dataServices.review.getOneOrNull({
          reviewer: { id: teamMember.member.id },
          reviewee: { id: teamMember.member.id },
          reviewType: ReviewTypeEnum.SELF,
        });
      }),
    );
    const selfReviews = reviewPromises.filter((review) => review !== null);

    return selfReviews;
  }

  // manager
  async getMyTeamManagerReviews() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const myTeam = await this.dataServices.team.getOneOrNull({
      leader: { id: userId },
    });
    if (!myTeam) {
      throw new AppException(
        { message: `You are not not assigned to any team as a leader` },
        'You are not not assigned to any team as a leader',
        404,
      );
    }
    const myTeamMembers =
      await this.dataServices.teamMember.getAllWithoutPagination({
        team: { id: myTeam.id },
      });

    if (myTeamMembers.length === 0) {
      return [];
    }
    const reviewPromises = await Promise.all(
      myTeamMembers.map(async (teamMember) => {
        return await this.dataServices.review.getOneOrNull({
          reviewer: { id: userId },
          reviewee: { id: teamMember.member.id },
          reviewType: ReviewTypeEnum.MANAGER,
        });
      }),
    );
    const managerReviews = reviewPromises.filter((review) => review !== null);

    return managerReviews;
  }

  async getMyTeamPeerReviews() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const peerNominations =
      await this.dataServices.peerNomination.getAllWithoutPagination({
        nominator: { id: userId },
      });
    if (peerNominations.length === 0) {
      return [];
    }
    const reviewPromises = await Promise.all(
      peerNominations.map(async (peerNomination) => {
        return await this.dataServices.review.getOneOrNull({
          reviewer: { id: peerNomination.nominee.id },
          reviewType: ReviewTypeEnum.PEER,
        });
      }),
    );
    const peerReviews = reviewPromises.filter((review) => review !== null);
    return peerReviews;
  }

  async createSelfReview(reviewDto: ReviewDto) {
    const userId = this.cls.get<UserClsData>('user')?.id;

    const selfReviews = await this.dataServices.review.getAllWithoutPagination({
      reviewer: { id: userId },
      reviewee: { id: userId },
      reviewType: ReviewTypeEnum.SELF,
    });

    if (selfReviews.length > 0) {
      if (
        selfReviews[selfReviews.length - 1].progressStatus !==
        ReviewProgressStatusEnum.COMPLETED
      ) {
        throw new AppException(
          { message: `You already have an incomplete self review` },
          'You already have an incomplete self review',
          409,
        );
      }
      const reviewSummary = await this.dataServices.reviewSummary.getOneOrNull({
        selfReview: { id: selfReviews[selfReviews.length - 1].id },
      });
      if (reviewSummary.isAcknowledged !== true) {
        throw new AppException(
          { message: `You have an unacknowledged review summary` },
          'You have an unacknowledged review summary',
          409,
        );
      }
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
        const questionnaireDto = new CreateQuestionnaireDto();
        questionnaireDto.review = createdReview.id;
        questionnaireDto.questionId = question.questionId;
        questionnaireDto.question = question.questionText;
        return this.questionnaireFactroyUseCaseService.createQuestionnaire(
          questionnaireDto,
        );
      }),
    );
    await this.dataServices.questionnaire.createBulk(questionnaires);
    return createdReview;
  }
  // manager
  async createManagerReview(reviewDto: ReviewDto) {
    const userId = this.cls.get<UserClsData>('user')?.id;

    const isTeamMember = await this.dataServices.teamMember.getOneOrNull({
      member: { id: reviewDto.reviewee },
    });

    if (!isTeamMember) {
      throw new AppException(
        { message: `The reviewee is not a team member` },
        'The reviewee is not a team member',
        400,
      );
    }

    const selfReviews = await this.dataServices.review.getAllWithoutPagination({
      reviewer: { id: reviewDto.reviewee },
      reviewee: { id: reviewDto.reviewee },
      reviewType: ReviewTypeEnum.SELF,
    });

    if (selfReviews.length > 0) {
      if (
        selfReviews[selfReviews.length - 1].progressStatus !==
        ReviewProgressStatusEnum.COMPLETED
      ) {
        throw new AppException(
          {
            message: `You have yet to evaluate the reviewee's latest self review`,
          },
          `You have yet to evaluate the reviewee's latest self review`,
          400,
        );
      }
    }

    const inCompleteManagerReviews =
      await this.dataServices.review.getAllWithoutPagination({
        reviewer: { id: userId },
        reviewee: { id: reviewDto.reviewee },
        progressStatus: Not(ReviewProgressStatusEnum.COMPLETED),
        reviewType: ReviewTypeEnum.MANAGER,
      });
    if (inCompleteManagerReviews.length > 0) {
      throw new AppException(
        {
          message: `The reviewee already has an incomplete manager review to be done by you`,
        },
        'The reviewee already has an incomplete manager review to be done by you',
        409,
      );
    }
    const newReview = this.reviewFactoryUseCaseService.createReview({
      ...reviewDto,
      reviewType: ReviewTypeEnum.MANAGER,
      reviewer: userId,
      reviewee: reviewDto.reviewee,
      progressStatus: ReviewProgressStatusEnum.PENDING,
    });
    const reviewee = await this.dataServices.user.getOne({
      id: reviewDto.reviewee,
    });
    newReview.subject = `Manager Review for ${reviewee.fullname}`;
    newReview.description = `Providing a manager review for ${reviewee.fullname}`;
    const createdReview = await this.dataServices.review.create(newReview);
    const questions = await this.dataServices.question.getAllWithoutPagination({
      questionType: QuestionTypeEnum.MANAGER,
    });
    const questionnaires = await Promise.all(
      questions.map(async (question) => {
        const questionnaireDto = new CreateQuestionnaireDto();
        questionnaireDto.review = createdReview.id;
        questionnaireDto.questionId = question.questionId;
        questionnaireDto.question = question.questionText.replace(
          'XYZ',
          reviewee.fullname,
        );
        return this.questionnaireFactroyUseCaseService.createQuestionnaire(
          questionnaireDto,
        );
      }),
    );
    await this.dataServices.questionnaire.createBulk(questionnaires);
    return createdReview;
  }

  async markReviewAsCompleted(reviewId: number) {
    const userId: number = this.cls.get<UserClsData>('user')?.id;
    const review = await this.dataServices.review.getOne({ id: reviewId });

    const myTeam = await this.dataServices.team.getOneOrNull({
      leader: { id: userId },
    });

    if (!myTeam) {
      throw new AppException(
        { message: `You are not a team leader` },
        'You are not a team leader',
        400,
      );
    }

    const teamMember = await this.dataServices.teamMember.getOneOrNull({
      team: { id: myTeam.id },
      member: { id: review.reviewee.id },
    });

    if (!teamMember) {
      throw new AppException(
        { message: `The reviewee is not a member of your team` },
        'The reviewee is not a member of your team',
        400,
      );
    }

    if (review.progressStatus === ReviewProgressStatusEnum.COMPLETED) {
      throw new AppException(
        { message: `Review already completed` },
        'Review already completed',
        400,
      );
    }

    if (review.progressStatus === ReviewProgressStatusEnum.PENDING) {
      throw new AppException(
        { message: `The review is not submitted yet` },
        'The review is not submitted yet',
        400,
      );
    }
    if (review.reviewType === ReviewTypeEnum.SELF) {
      const managerReviews =
        await this.dataServices.review.getAllWithoutPagination({
          reviewer: { id: userId },
          reviewee: { id: review.reviewee.id },
          reviewType: ReviewTypeEnum.MANAGER,
        });

      const managerReview = managerReviews[managerReviews.length - 1];

      if (
        managerReview &&
        managerReview.progressStatus === ReviewProgressStatusEnum.COMPLETED
      ) {
        const selfQuestionnaires =
          await this.dataServices.questionnaire.getAllWithoutPagination({
            review: { id: review.id },
          });
        const managerQuestionnaires =
          await this.dataServices.questionnaire.getAllWithoutPagination({
            review: { id: managerReview.id },
          });

        const sortedSelfQuestionnaires = selfQuestionnaires.sort(
          (a, b) => a.questionId - b.questionId,
        );
        const sortedManagerQuestionnaires = managerQuestionnaires.sort(
          (a, b) => a.questionId - b.questionId,
        );

        const summaryQuestionnaire = [];
        const averageRatings = [];
        for (let i = 0; i < managerQuestionnaires.length; i++) {
          summaryQuestionnaire.push({
            question: sortedManagerQuestionnaires[i].question,
            managerFeedback: {
              answers: sortedManagerQuestionnaires[i].answers,
              ratings: sortedManagerQuestionnaires[i].ratings,
            },
            revieweeFeedback: {
              answers: sortedSelfQuestionnaires[i].answers,
              ratings: sortedSelfQuestionnaires[i].ratings,
            },
          });
          // averaging ratings of each iteration
          const averageRating =
            (sortedManagerQuestionnaires[i].ratings +
              sortedSelfQuestionnaires[i].ratings) /
            2;
          if (averageRating !== 0) {
            averageRatings.push(averageRating);
          }
        }

        // total sum of all number elements in the averateRatings array
        const finalAverageRatings =
          averageRatings.reduce((acc, curr) => acc + curr, 0) /
          averageRatings.length;

        const createReviewSummaryDto = new CreateReviewSummaryDto();
        createReviewSummaryDto.reviewee = review.reviewee.id;
        createReviewSummaryDto.selfReview = review.id;
        createReviewSummaryDto.managerReview = managerReview.id;
        createReviewSummaryDto.summaryQuestionnaire = summaryQuestionnaire;
        createReviewSummaryDto.averagePerformanceRating = finalAverageRatings;
        createReviewSummaryDto.isAcknowledged = false;

        const newReviewSummary =
          this.userReviewSummaryFactoryUseCaseService.createReviewSummary(
            createReviewSummaryDto,
          );
        await this.dataServices.reviewSummary.create(newReviewSummary);
      }
    } else if (review.reviewType === ReviewTypeEnum.MANAGER) {
      const employeeSelfReviews =
        await this.dataServices.review.getAllWithoutPagination({
          reviewer: { id: review.reviewee.id },
          reviewee: { id: review.reviewee.id },
          reviewType: ReviewTypeEnum.SELF,
        });

      const employeeSelfReview =
        employeeSelfReviews[employeeSelfReviews.length - 1];

      if (
        employeeSelfReview &&
        employeeSelfReview.progressStatus === ReviewProgressStatusEnum.COMPLETED
      ) {
        const selfQuestionnaires =
          await this.dataServices.questionnaire.getAllWithoutPagination({
            review: { id: employeeSelfReview.id },
          });

        const managerQuestionnaires =
          await this.dataServices.questionnaire.getAllWithoutPagination({
            review: { id: review.id },
          });

        const sortedSelfQuestionnaires = selfQuestionnaires.sort(
          (a, b) => a.questionId - b.questionId,
        );
        const sortedManagerQuestionnaires = managerQuestionnaires.sort(
          (a, b) => a.questionId - b.questionId,
        );

        const summaryQuestionnaire = [];
        const averageRatings = [];
        for (let i = 0; i < managerQuestionnaires.length; i++) {
          summaryQuestionnaire.push({
            question: sortedManagerQuestionnaires[i].question,
            managerFeedback: {
              answers: sortedManagerQuestionnaires[i].answers,
              ratings: sortedManagerQuestionnaires[i].ratings,
            },
            revieweeFeedback: {
              answers: sortedSelfQuestionnaires[i].answers,
              ratings: sortedSelfQuestionnaires[i].ratings,
            },
          });
          // averaging ratings of each iteration
          const averageRating =
            (sortedManagerQuestionnaires[i].ratings +
              sortedSelfQuestionnaires[i].ratings) /
            2;
          if (averageRating !== 0) {
            averageRatings.push(averageRating);
          }
        }
        // total sum of all number elements in the averateRatings array
        const finalAverageRatings =
          averageRatings.reduce((acc, curr) => acc + curr, 0) /
          averageRatings.length;

        const createReviewSummaryDto = new CreateReviewSummaryDto();
        createReviewSummaryDto.reviewee = employeeSelfReview.reviewee.id;
        createReviewSummaryDto.selfReview = employeeSelfReview.id;
        createReviewSummaryDto.managerReview = review.id;
        createReviewSummaryDto.summaryQuestionnaire = summaryQuestionnaire;
        createReviewSummaryDto.averagePerformanceRating = finalAverageRatings;

        const newReviewSummary =
          this.userReviewSummaryFactoryUseCaseService.createReviewSummary(
            createReviewSummaryDto,
          );

        await this.dataServices.reviewSummary.create(newReviewSummary);
      }
    }
    const reviewDto = new ReviewDto();
    reviewDto.progressStatus = ReviewProgressStatusEnum.COMPLETED;

    const updatedReview =
      this.reviewFactoryUseCaseService.updateReviewProgessStatus(reviewDto);
    return await this.dataServices.review.update(
      { id: review.id },
      updatedReview,
    );
  }

  async submitReviewById(
    reviewId: number,
    updateQuestionnairesDto: UpdateQuestionnairesDto,
  ) {
    const { questionnaires } = updateQuestionnairesDto;
    const userId = this.cls.get<UserClsData>('user')?.id;
    // Validate questionnaires array
    if (!questionnaires.length) {
      throw new AppException(
        { questionnaires: 'Questionnaires cannot be empty' },
        'Questionnaires cannot be empty',
        400,
      );
    }

    // Fetch review early to validate it's not already submitted
    const review = await this.dataServices.review.getOne({ id: reviewId });

    if (review.reviewer.id !== userId) {
      throw new AppException(
        { message: 'You are not the reviewer of this review' },
        'You are not the reviewer of this review',
        401,
      );
    }

    if (review.progressStatus === ReviewProgressStatusEnum.SUBMITTED) {
      throw new AppException(
        { message: 'Review already submitted' },
        'Review already submitted',
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

    // Update review status
    const reviewDto = new ReviewDto();
    reviewDto.progressStatus = ReviewProgressStatusEnum.SUBMITTED;
    const updatedReview =
      this.reviewFactoryUseCaseService.updateReviewProgessStatus(reviewDto);

    return this.dataServices.review.update({ id: review.id }, updatedReview);
  }
}
