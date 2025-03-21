import { Controller, Get, Param } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { ReviewSummaryUseCaseService } from 'src/use-cases/review-summary-use-cases/review-summary-use-case.service';

@Controller()
export class ReviewSummaryController {
  constructor(
    private reviewSummaryUseCaseService: ReviewSummaryUseCaseService,
  ) {}

  @Get('/get/:id')
  async getReviewSummary(@Param('id') reviewSummaryId: number) {
    return CoreApiResponse.success(
      await this.reviewSummaryUseCaseService.getReveiwSummaryById(
        reviewSummaryId,
      ),
    );
  }
}
