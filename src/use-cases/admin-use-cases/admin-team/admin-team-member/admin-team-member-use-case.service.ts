import { Injectable } from '@nestjs/common';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IDataServices } from 'src/core/abstracts';
import { AdminTeamMemberFactoryUseCaseService } from './admin-team-member-factory-use-case.service';
import { CreateTeamMemberDto } from 'src/core/dtos/request/teamMember.dto';
import { TeamMemberModel } from 'src/core/models/team-member.model';

@Injectable()
export class AdminTeamMemberUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private adminTeamMemberFactoryUseCaseService: AdminTeamMemberFactoryUseCaseService,
  ) {}

  async getTeamMembersByTeam(teamId: number): Promise<IPaginationData> {
    return await this.dataServices.teamMember.getAll({ team: { id: teamId } });
  }

  async addTeamMember(createTeamMemberDto: CreateTeamMemberDto) {
    const newTeamMember =
      this.adminTeamMemberFactoryUseCaseService.createTeamMember(
        createTeamMemberDto,
      );
    return await this.dataServices.teamMember.create(newTeamMember);
  }

  async removeTeamMember(teamMemberId: number) {
    const teamMember = await this.dataServices.teamMember.getOne({
      id: teamMemberId,
    });
    return await this.dataServices.teamMember.remove(teamMember);
  }
}
