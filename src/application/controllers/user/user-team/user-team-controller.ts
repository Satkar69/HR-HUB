import { Controller, Get } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { UserTeamUseCaseService } from 'src/use-cases/user-use-cases/user-team/user-team-use-case.service';

@Controller('/team')
export class UserTeamController {
  constructor(private userTeamUseCaseService: UserTeamUseCaseService) {}

  @Get('/get-my-team')
  async getMyTeam() {
    return CoreApiResponse.success(
      await this.userTeamUseCaseService.getMyTeam(),
    );
  }
}
