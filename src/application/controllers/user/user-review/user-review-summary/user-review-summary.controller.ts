import { Controller, Get, Param, Patch } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Manager } from 'src/application/decorators/manager.decorator';
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

  @Manager()
  @Get('/my/team/acknowledged/get-all')
  async getTeamAcknodlwdgedReviewSummaries() {
    return CoreApiResponse.success(
      await this.userReviewSummaryUseCaseService.getTeamAcknodlwdgedReviewSummaries(),
    );
  }

  @Manager()
  @Get('/my/team/unacknowledged/get-all')
  async getTeamUnAcknodlwdgedReviewSummaries() {
    return CoreApiResponse.success(
      await this.userReviewSummaryUseCaseService.getTeamUnAcknodlwdgedReviewSummaries(),
    );
  }

  @Patch('/acknowledge/:id')
  async acknowledgeReviewSummary(@Param('id') reviewSummaryId: number) {
    return CoreApiResponse.success(
      await this.userReviewSummaryUseCaseService.acknowdegeReviewSummary(
        reviewSummaryId,
      ),
    );
  }
}
