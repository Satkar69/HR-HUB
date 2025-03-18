import { Injectable } from '@nestjs/common';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IDataServices } from 'src/core/abstracts';
import { AdminTeamMemberFactoryUseCaseService } from './admin-team-member-factory-use-case.service';
import { AddTeamMembersDto } from 'src/core/dtos/request/teamMember.dto';
import AppException from 'src/application/exception/app.exception';

@Injectable()
export class AdminTeamMemberUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private adminTeamMemberFactoryUseCaseService: AdminTeamMemberFactoryUseCaseService,
  ) {}

  async getTeamMembersByTeam(teamId: number): Promise<IPaginationData> {
    return await this.dataServices.teamMember.getAll({ team: { id: teamId } });
  }

  async addTeamMember(addTeamMembersDto: AddTeamMembersDto) {
    const teadId = addTeamMembersDto.team;
    const members = addTeamMembersDto.members;
    if (members.length === 0) {
      throw new AppException(
        { members: `Members cannot be empty` },
        'Members cannot be empty',
        400,
      );
    }
    const newTeamMembers = [];
    members.map((member) => {
      newTeamMembers.push(
        this.adminTeamMemberFactoryUseCaseService.createTeamMember({
          team: teadId,
          member: member,
        }),
      );
    });
    const createdTeamMembers =
      await this.dataServices.teamMember.createBulk(newTeamMembers);
    return createdTeamMembers;
  }

  async removeTeamMember(teamMemberId: number) {
    const teamMember = await this.dataServices.teamMember.getOne({
      id: teamMemberId,
    });

    const deletedTeamMember = await this.dataServices.teamMember.delete({
      id: teamMember.id,
    });
    return deletedTeamMember;
  }
}
