import { Controller, Get, Query } from '@nestjs/common';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { UserTeamMemberUseCaseService } from 'src/use-cases/user-use-cases/user-team/user-team-member/user-team-member-use-case.service';

@Controller('/team/member')
export class UserTeamMemberController {
  constructor(
    private userTeamMemberUseCaseService: UserTeamMemberUseCaseService,
  ) {}

  @Get('/get-my-members')
  async getMyTeamMembers(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.userTeamMemberUseCaseService.getMyTeamMembers(),
      query,
    );
  }
}
