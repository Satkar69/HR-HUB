import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';

@Injectable()
export class adminDashboardUseCaseService {
  constructor(
    private readonly dataServices: IDataServices,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}

  async generateOverallReviewInfo() {
    const totalReviews =
      await this.dataServices.review.getAllWithoutPagination();
    const totalCompletedReviews = totalReviews.filter(
      (review) => review.progressStatus === ReviewProgressStatusEnum.COMPLETED,
    );
    const totalSubmittedReviews = totalReviews.filter(
      (review) => review.progressStatus === ReviewProgressStatusEnum.SUBMITTED,
    );
    const totalPendingReviews = totalReviews.filter(
      (review) => review.progressStatus === ReviewProgressStatusEnum.PENDING,
    );

    return {
      totalReviews: totalReviews.length,
      totalCompletedReviews: totalCompletedReviews.length,
      totalSubmittedReviews: totalSubmittedReviews.length,
      totalPendingReviews: totalPendingReviews.length,
    };
  }
}
