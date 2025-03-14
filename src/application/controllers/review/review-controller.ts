import { Controller, Get, Param } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { ReviewUseCaseService } from 'src/use-cases/review-use-cases/review-use-case.service';

@Controller()
export class ReviewController {
  constructor(private reviewUseCaseService: ReviewUseCaseService) {}

  @Get('/get/:id')
  async getReviewById(@Param('id') reviewId: number) {
    return CoreApiResponse.success(
      await this.reviewUseCaseService.getReviewById(reviewId),
    );
  }
}
