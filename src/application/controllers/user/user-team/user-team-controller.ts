import { Controller, Get, Post, Query } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Manager } from 'src/application/decorators/manager.decorator';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { UserTeamUseCaseService } from 'src/use-cases/user-use-cases/user-team/user-team-use-case.service';

@Controller('/team')
export class UserTeamController {
  constructor(private userTeamUseCaseService: UserTeamUseCaseService) {}

  @Manager()
  @Get('/get-my-team')
  async getMyTeam() {
    return CoreApiResponse.success(
      await this.userTeamUseCaseService.getMyTeam(),
    );
  }
}
