import { Controller, Get } from '@nestjs/common';
import { adminDashboardUseCaseService } from 'src/use-cases/admin-use-cases/admin-dashboard/admin-dashboard-use-case.service';
import { CoreApiResponse } from 'src/application/api/core-api-response';

@Controller('/dashboard')
export class AdminDashbaordController {
  constructor(
    private adminDashboardUseCaseService: adminDashboardUseCaseService,
  ) {}

  @Get('/get-overall-review-info')
  async getOverallReviewInfo() {
    return CoreApiResponse.success(
      await this.adminDashboardUseCaseService.generateOverallReviewInfo(),
    );
  }
}
