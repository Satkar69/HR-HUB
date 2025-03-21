import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Manager } from 'src/application/decorators/manager.decorator';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
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
  async getTeamAcknodlwdgedReviewSummaries(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.userReviewSummaryUseCaseService.getTeamAcknodlwdgedReviewSummaries(),
      query,
    );
  }

  @Manager()
  @Get('/my/team/unacknowledged/get-all')
  async getTeamUnAcknodlwdgedReviewSummaries(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.userReviewSummaryUseCaseService.getTeamUnAcknodlwdgedReviewSummaries(),
      query,
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
