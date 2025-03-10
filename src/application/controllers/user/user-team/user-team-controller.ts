import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Manager } from 'src/application/decorators/manager.decorator';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { CreateTeamDto } from 'src/core/dtos/request/team.dto';
import { UserTeamUseCaseService } from 'src/use-cases/user-use-cases/user-team/user-team-use-case.service';

@Controller('/team')
export class UserTeamController {
  constructor(private userTeamUseCaseService: UserTeamUseCaseService) {}

  @Manager()
  @Post('/create')
  async cerateTeam(@Body() createTeamDto: CreateTeamDto) {
    return CoreApiResponse.success(
      await this.userTeamUseCaseService.createTeam(createTeamDto),
    );
  }

  @Manager()
  @Get('/get-my-teams')
  async getMyTeams(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.userTeamUseCaseService.getMyTeams(),
      query,
    );
  }
}
