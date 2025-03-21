import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { UserClsData } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';

// TODO :: make the necessary services to get the user's review summary and to get user's acknowledgement
@Injectable()
export class UserReviewSummaryUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private readonly cls: IClsStore<AppClsStore>,
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
}
