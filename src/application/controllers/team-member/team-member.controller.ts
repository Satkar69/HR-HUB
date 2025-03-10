import { Controller, Get, Param } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { TeamMemberUseCaseService } from 'src/use-cases/team-member-use-cases/team-member-use-case.service';

@Controller()
export class TeamMemberController {
  constructor(private teamMemberUseCaseService: TeamMemberUseCaseService) {}

  @Get('/get/:id')
  async getTeamMember(@Param('id') teamMemberId: number) {
    return CoreApiResponse.success(
      await this.teamMemberUseCaseService.getTeamMemberbyId(teamMemberId),
    );
  }
}
