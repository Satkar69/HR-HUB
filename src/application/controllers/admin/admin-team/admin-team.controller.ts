import { Body, Controller, Post } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { CreateTeamDto } from 'src/core/dtos/request/team.dto';
import { AdminTeamUseCaseService } from 'src/use-cases/admin-use-cases/admin-team/admin-team-use-case.service';

@Controller('/team')
export class AdminTeamController {
  constructor(private adminTeamUseCaseService: AdminTeamUseCaseService) {}

  @Post('/create')
  async createTeam(@Body() createTeamDto: CreateTeamDto) {
    return CoreApiResponse.success(
      await this.adminTeamUseCaseService.createTeam(createTeamDto),
    );
  }
}
