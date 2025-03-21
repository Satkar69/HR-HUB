import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { UserClsData } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { UpdateReviewSummaryAcknowledgementDto } from 'src/core/dtos/review-summary.dto';
import { UserReviewSummaryFactoryUseCaseService } from './user-review-summary-factory-use-case.service';
import AppException from 'src/application/exception/app.exception';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';

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

  // TODO :: make corresponding apis for all of the below methods

  async getTeamAcknodlwdgedReviewSummaries(): Promise<IPaginationData> {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const reviewSummaries = await this.dataServices.reviewSummary.getAll(
      {
        managerReview: { reviewer: { id: userId } },
        isAcknowledged: true,
      },
      { reviewee: true },
    );
    return reviewSummaries;
  }

  async getTeamUnAcknodlwdgedReviewSummaries(): Promise<IPaginationData> {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const reviewSummaries = await this.dataServices.reviewSummary.getAll(
      {
        managerReview: { reviewer: { id: userId } },
        isAcknowledged: false,
      },
      { reviewee: true },
    );
    return reviewSummaries;
  }

  async acknowdegeReviewSummary(reviewSummaryId: number) {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const reviewSummary = await this.dataServices.reviewSummary.getOneOrNull({
      id: reviewSummaryId,
      reviewee: { id: userId },
    });

    if (!reviewSummary) {
      throw new AppException(
        { message: 'You can only acknowledge your own review summary' },
        'You can only acknowledge your own review summary',
        401,
      );
    }

    if (reviewSummary.isAcknowledged === true) {
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
