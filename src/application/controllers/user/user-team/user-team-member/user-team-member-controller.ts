import { Body, Controller, Post } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Manager } from 'src/application/decorators/manager.decorator';
import { CreateTeamMemberDto } from 'src/core/dtos/request/teamMember.dto';
import { UserTeamMemberUseCaseService } from 'src/use-cases/user-use-cases/user-team/user-team-member/user-team-member-use-case.service';

@Controller('/team/member')
export class UserTeamMemberController {
  constructor(
    private userTeamMemberUseCaseService: UserTeamMemberUseCaseService,
  ) {}

  @Manager()
  @Post('/create')
  async addTeamMember(@Body() createTeamMemberDto: CreateTeamMemberDto) {
    return CoreApiResponse.success(
      await this.userTeamMemberUseCaseService.createTeamMember(
        createTeamMemberDto,
      ),
    );
  }
}
