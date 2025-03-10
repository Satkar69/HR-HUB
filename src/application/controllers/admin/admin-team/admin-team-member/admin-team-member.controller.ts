import { Controller, Get, Query } from '@nestjs/common';
import { AdminTeamMemberUseCaseService } from 'src/use-cases/admin-use-cases/admin-team/admin-team-member/admin-team-member-use-case.service';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { CoreApiResponse } from 'src/application/api/core-api-response';

@Controller('/team/member')
export class AdminTeamMemberController {
  constructor(
    private adminTeamMemberUseCaseService: AdminTeamMemberUseCaseService,
  ) {}

  @Get('/get-all')
  async getAllTeamMembers(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.adminTeamMemberUseCaseService.getTeamMembers(),
      query,
    );
  }
}
