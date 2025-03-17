import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import {
  PeerNominationDto,
  UpdatePeerNominationStatusDto,
} from 'src/core/dtos/request/peer-nomination.dto';
import { UserPeerNominationFactoryUseCaseService } from './user-peer-nomination-factory-use-case.service';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { UserClsData } from 'src/common/interface/app-cls-store.interface';
import { PeerNominationStatusEnum } from 'src/common/enums/peer-nomination-status.enum';
import { ReviewFactoryUseCaseService } from 'src/use-cases/review-use-cases/review-factory-use-case.service';
import { QuestionnaireFactoryUseCaseService } from 'src/use-cases/questioninaire-use-cases/questionnaire-factory-use-case.service';
import AppException from 'src/application/exception/app.exception';
import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { ReviewTypeEnum } from 'src/common/enums/review-type.enum';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';
import { QuestionTypeEnum } from 'src/common/enums/question-type.enum';
import { CreateQuestionnaireDto } from 'src/core/dtos/request/questionnaire.dto';
import AppUnauthorizedException from 'src/application/exception/app-unauthorized.exception';

// TODO :: Implement and test all the methods of this service by making corresponding controllers

@Injectable()
export class UserPeerNominationUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private userPeerNominationFactoryUseCaseService: UserPeerNominationFactoryUseCaseService,
    private reviewFactoryUseCaseService: ReviewFactoryUseCaseService,
    private questionnaireFactoryUseCaseService: QuestionnaireFactoryUseCaseService,
    private cls: IClsStore<AppClsStore>,
  ) {}

  async createPeerNomination(peerNominationDto: PeerNominationDto) {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const existingPeerNomination =
      await this.dataServices.peerNomination.getOneOrNull({
        nominee: { id: peerNominationDto.nominee },
        nominationStatus: PeerNominationStatusEnum.PENDING,
      });
    if (existingPeerNomination) {
      throw new AppException(
        { message: 'The employee already has a pending peer nomination' },
        'The employee already has a pending peer nomination',
        400,
      );
    }
    const newPeerNomination =
      this.userPeerNominationFactoryUseCaseService.createPeerNomination({
        ...peerNominationDto,
        nominator: userId,
        nominationStatus: PeerNominationStatusEnum.PENDING,
      });
    return this.dataServices.peerNomination.create(newPeerNomination);
  }

  async getAssignedPeerNomination() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const peerNomination = await this.dataServices.peerNomination.getOne({
      nominee: { id: userId },
    });
    return peerNomination;
  }

  async getCreatedPeerMominations() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const peerNominations = await this.dataServices.peerNomination.getAll({
      nominator: { id: userId },
    });
    return peerNominations;
  }

  async assignedPeerNominationStatusAction(
    peerNominationId: number,
    updatePeerNominationStatusDto: UpdatePeerNominationStatusDto,
  ) {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const peerNomination = await this.dataServices.peerNomination.getOneOrNull({
      nominee: { id: userId },
    });
    if (!peerNomination) {
      throw new AppUnauthorizedException(
        'You are not nominee for this peer nomination',
      );
    }
    if (peerNomination.nominationStatus === PeerNominationStatusEnum.ACCEPTED) {
      throw new AppException(
        {
          message: 'You cannot change the peer nomination status once accepted',
        },
        'You cannot change the peer nomination status once accepted',
        400,
      );
    }
    const updatedPeerNominationStatus =
      this.userPeerNominationFactoryUseCaseService.updatePeerNominationStatus(
        updatePeerNominationStatusDto,
      );
    const updatedPeerNomination = await this.dataServices.peerNomination.update(
      { id: peerNominationId },
      updatedPeerNominationStatus,
    );
    if (
      updatedPeerNomination.nominationStatus ===
      PeerNominationStatusEnum.ACCEPTED
    ) {
      const reviewDto = new ReviewDto();
      const twoWeekFromNow = new Date();
      reviewDto.reviewType = ReviewTypeEnum.PEER;
      reviewDto.reviewer = updatedPeerNomination.nominee.id;
      reviewDto.reviewee = updatedPeerNomination.reviewee.id;
      reviewDto.subject = `Peer Review for ${updatedPeerNomination.reviewee.fullname} by ${updatedPeerNomination.nominee.fullname}`;
      reviewDto.description = `Please provide a peer review for ${updatedPeerNomination.reviewee.fullname}`;
      reviewDto.progressStatus = ReviewProgressStatusEnum.PENDING;
      twoWeekFromNow.setDate(twoWeekFromNow.getDate() + 14);
      reviewDto.dueDate = twoWeekFromNow;

      const newReview =
        this.reviewFactoryUseCaseService.createReview(reviewDto);
      const createdReview = await this.dataServices.review.create(newReview);
      const questions =
        await this.dataServices.question.getAllWithoutPagination({
          questionType: QuestionTypeEnum.PEER,
        });
      const questionnaires = await Promise.all(
        questions.map(async (question) => {
          const questionnaireDto = new CreateQuestionnaireDto();
          questionnaireDto.review = createdReview.id;
          questionnaireDto.question = question.questionText.replace(
            'XYZ',
            updatedPeerNomination.reviewee.fullname,
          );
          return this.questionnaireFactoryUseCaseService.createQuestionnaire(
            questionnaireDto,
          );
        }),
      );
      await this.dataServices.questionnaire.createBulk(questionnaires);
    }
    return updatedPeerNomination;
  }
}
