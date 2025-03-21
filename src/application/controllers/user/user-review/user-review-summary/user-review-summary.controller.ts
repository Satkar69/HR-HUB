import { Controller, Get } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { UserReviewSummaryUseCaseService } from 'src/use-cases/user-use-cases/user-review/user-review-summary/user-review-summary-use-case.service';

@Controller('/review/summary')
export class UserReviewSummaryController {
  constructor(
    private userReviewSummaryUseCaseService: UserReviewSummaryUseCaseService,
  ) {}

  @Get('/my/get')
  async getMyLatestReviewSummary() {
    return CoreApiResponse.success(
      await this.userReviewSummaryUseCaseService.getUserLatestReviewSummary(),
    );
  }
}
