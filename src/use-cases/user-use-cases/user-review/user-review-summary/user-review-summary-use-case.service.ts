import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { UserClsData } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { UpdateReviewSummaryAcknowledgementDto } from 'src/core/dtos/review-summary.dto';
import { UserReviewSummaryFactoryUseCaseService } from './user-review-summary-factory-use-case.service';
import AppException from 'src/application/exception/app.exception';

@Injectable()
export class UserReviewSummaryUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private readonly cls: IClsStore<AppClsStore>,
    private userReviewSummaryAcknodledgeFactoryUseCaseService: UserReviewSummaryFactoryUseCaseService,
  ) {}

  async getUserLatestReviewSummary() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const reviewSummaries =
      await this.dataServices.reviewSummary.getAllWithoutPagination({
        reviewee: { id: userId },
        isAcknowledged: false,
      });
    if (reviewSummaries.length === 0) {
      return {};
    }
    const reviewSummary = reviewSummaries[reviewSummaries.length - 1];
    return reviewSummary;
  }

  async getTeamAcknodlwdgedReviewSummaries() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const reviewSummaries =
      await this.dataServices.reviewSummary.getAllWithoutPagination({
        managerReview: { reviewer: { id: userId } },
        isAcknowledged: true,
      });
    return reviewSummaries;
  }

  async getTeamUnAcknodlwdgedReviewSummaries() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const reviewSummaries =
      await this.dataServices.reviewSummary.getAllWithoutPagination({
        managerReview: { reviewer: { id: userId } },
        isAcknowledged: false,
      });
    return reviewSummaries;
  }

  async acknowdegeReviewSummary(reviewSummaryId: number) {
    const reviewSummary = await this.dataServices.reviewSummary.getOneOrNull({
      id: reviewSummaryId,
    });
    if (reviewSummary && reviewSummary.isAcknowledged === true) {
      throw new AppException(
        { message: 'Review Summary already acknowledged' },
        'Review Summary already acknowledged',
        400,
      );
    }
    const updateReviewSummaryAcknowledgementDto =
      new UpdateReviewSummaryAcknowledgementDto();
    updateReviewSummaryAcknowledgementDto.isAcknowledged = true;
    const acknodledgedReviewSummary =
      this.userReviewSummaryAcknodledgeFactoryUseCaseService.updateReviewSummaryAcknowledgement(
        updateReviewSummaryAcknowledgementDto,
      );
    return await this.dataServices.reviewSummary.update(
      { id: reviewSummaryId },
      acknodledgedReviewSummary,
    );
  }
}
