import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
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

  @Get('/get-all')
  async getAllTeams(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.adminTeamUseCaseService.getAllTeams(),
      query,
    );
  }

  @Delete('/delete/:id')
  async deleteTeam(@Param('id') teamId: number) {
    return CoreApiResponse.success(
      await this.adminTeamUseCaseService.deleteTeam(teamId),
    );
  }
}
