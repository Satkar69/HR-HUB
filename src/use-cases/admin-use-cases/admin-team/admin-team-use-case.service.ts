import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
import { AdminTeamFactoryUseCaseService } from './admin-team-factory-use-case.service';
import { AdminTeamMemberFactoryUseCaseService } from './admin-team-member/admin-team-member-factory-use-case.service';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';

@Injectable()
export class AdminTeamUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private adminTeamFactoryUseCaseService: AdminTeamFactoryUseCaseService,
    private adminTeamMemberFactoryUseCaseService: AdminTeamMemberFactoryUseCaseService,
  ) {}

  async getAllTeams(): Promise<IPaginationData> {
    return await this.dataServices.team.getAll();
  }

  // add team Members while create teams
  async createTeam(createTeamDto: CreateTeamDto) {
    // const newTeam =
    //   this.adminTeamFactoryUseCaseService.createTeam(createTeamDto);
    // const createdTeam = await this.dataServices.team.create(newTeam);
    // const createManagerMembership = new CreateTeamMemberDto();
    // createManagerMembership.team = createdTeam.id;
    // createManagerMembership.member = createTeamDto.leader;
    // const newManagerMembership =
    //   this.adminTeamMemberFactoryUseCaseService.createTeamMember(
    //     createManagerMembership,
    //   );
    // await this.dataServices.teamMember.create(newManagerMembership);
    // await Promise.all(
    //   createTeamDto.members.map(async (member) => {
    //     const createTeamMemberDto = new CreateTeamMemberDto();
    //     createTeamMemberDto.team = createdTeam.id;
    //     createTeamMemberDto.member = member;
    //     const newTeamMember =
    //       this.adminTeamMemberFactoryUseCaseService.createTeamMember(
    //         createTeamMemberDto,
    //       );
    //     return await this.dataServices.teamMember.create(newTeamMember);
    //   }),
    // );

    // return createdTeam;

    // Create team object
    const newTeam =
      this.adminTeamFactoryUseCaseService.createTeam(createTeamDto);
    const createdTeam = await this.dataServices.team.create(newTeam);

    // Prepare all team member objects in one go
    const teamMembers = [];
    if (createTeamDto.members.length > 0) {
      await Promise.all(
        createTeamDto.members.map((memberId) =>
          teamMembers.push(
            this.adminTeamMemberFactoryUseCaseService.createTeamMember({
              team: createdTeam.id,
              member: memberId,
            }),
          ),
        ),
      );
      // Bulk insert all team members in one database operation
      await this.dataServices.teamMember.createBulk(teamMembers);
    }

    return createdTeam;
  }

  // can remove team members directly while updating the team
  async updateTeam(teamId: number, updateTeamDto: UpdateTeamDto) {
    const team = await this.dataServices.team.getOne({ id: teamId });
    const editedTeam = this.adminTeamFactoryUseCaseService.updateTeam(
      team,
      updateTeamDto,
    );
    return await this.dataServices.team.update({ id: team.id }, editedTeam);
  }

  async deleteTeam(teamId: number) {
    return await this.dataServices.team.delete({ id: teamId });
  }
}
