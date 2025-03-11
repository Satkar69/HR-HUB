import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AdminTeamMemberUseCaseService } from 'src/use-cases/admin-use-cases/admin-team/admin-team-member/admin-team-member-use-case.service';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { CreateTeamMemberDto } from 'src/core/dtos/request/teamMember.dto';

@Controller('/team')
export class AdminTeamMemberController {
  constructor(
    private adminTeamMemberUseCaseService: AdminTeamMemberUseCaseService,
  ) {}

  @Get('/:id/member/get-all')
  async getAllTeamMembers(
    @Param('id') teamId: number,
    @Query() query: IPaginationQuery,
  ) {
    return CoreApiResponse.pagination(
      await this.adminTeamMemberUseCaseService.getTeamMembersByTeam(teamId),
      query,
    );
  }

  @Post('/member/create')
  async createTeamMember(@Body() createTeamMemberDto: CreateTeamMemberDto) {
    return CoreApiResponse.success(
      await this.adminTeamMemberUseCaseService.addTeamMember(
        createTeamMemberDto,
      ),
    );
  }
}
