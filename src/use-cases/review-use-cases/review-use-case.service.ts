import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class ReviewUseCaseService {
  constructor(private dataServices: IDataServices) {}

  async getReviewById(reviewId: number) {
    return await this.dataServices.review.getOne({ id: reviewId });
  }
}
