import { Controller, Get, Param } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { TeamUseCaseService } from 'src/use-cases/team-use-cases/team-use-case.service';

@Controller()
export class TeamController {
  constructor(private teamUseCaseService: TeamUseCaseService) {}

  @Get('/get/:id')
  async getTeam(@Param('id') teamId: number) {
    return CoreApiResponse.success(
      await this.teamUseCaseService.getTeambyId(teamId),
    );
  }
}
