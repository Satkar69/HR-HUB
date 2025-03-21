import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class ReviewSummaryUseCaseService {
  constructor(private dataServices: IDataServices) {}

  async getReveiwSummaryById(reviewSummaryId: number) {
    return await this.dataServices.reviewSummary.getOne(
      {
        id: reviewSummaryId,
      },
      { reviewee: true },
    );
  }
}
