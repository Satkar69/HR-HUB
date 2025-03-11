import { ConsoleLogger, Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
import { AdminTeamFactoryUseCaseService } from './admin-team-factory-use-case.service';
import { AdminTeamMemberFactoryUseCaseService } from './admin-team-member/admin-team-member-factory-use-case.service';
import { CreateTeamMemberDto } from 'src/core/dtos/request/teamMember.dto';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import AppException from 'src/application/exception/app.exception';

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
    // createManagerMembership.isLeader = true;
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
    const teamMembers = [
      // Leader membership
      this.adminTeamMemberFactoryUseCaseService.createTeamMember({
        team: createdTeam.id,
        member: createTeamDto.leader,
        isLeader: true,
      }),
      // Regular members
      ...createTeamDto.members.map((memberId) =>
        this.adminTeamMemberFactoryUseCaseService.createTeamMember({
          team: createdTeam.id,
          member: memberId,
          isLeader: false,
        }),
      ),
    ];

    // Bulk insert all team members in one database operation
    await this.dataServices.teamMember.createBulk(teamMembers);

    return createdTeam;
  }

  async deleteTeam(teamId: number) {
    return await this.dataServices.team.remove({ id: teamId });
  }
}
