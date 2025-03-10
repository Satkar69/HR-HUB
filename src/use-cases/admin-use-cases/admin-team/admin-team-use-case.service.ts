import { ConsoleLogger, Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
import { AdminTeamFactoryUseCaseService } from './admin-team-factory-use-case.service';
import { AdminTeamMemberFactoryUseCaseService } from './admin-team-member/admin-team-member-factory-use-case.service';
import { CreateTeamMemberDto } from 'src/core/dtos/request/teamMember.dto';
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

  async createTeam(createTeamDto: CreateTeamDto) {
    const newTeam =
      this.adminTeamFactoryUseCaseService.createTeam(createTeamDto);

    const createdTeam = await this.dataServices.team.create(newTeam);

    await Promise.all(
      createTeamDto.members.map(async (member) => {
        const createTeamMemberDto = new CreateTeamMemberDto();
        createTeamMemberDto.team = createdTeam.id;
        createTeamMemberDto.member = member;
        const newTeamMember =
          this.adminTeamMemberFactoryUseCaseService.createTeamMember(
            createTeamMemberDto,
          );
        await this.dataServices.teamMember.create(newTeamMember);
      }),
    );
    return createdTeam;
  }

  async updateTeam(teamId: number, updateTeamDto: UpdateTeamDto) {
    const team = await this.dataServices.team.getOne({ id: teamId });
    const editedTeam = this.adminTeamFactoryUseCaseService.updateTeam(
      team,
      updateTeamDto,
    );
    const teamMembers =
      await this.dataServices.teamMember.getAllWithoutPagination({
        team: { id: team.id },
      });
    console.log(teamMembers);
    if (updateTeamDto.members.length !== teamMembers.length) {
      await Promise.all(
        updateTeamDto.members.map(async (member) => {
          if (
            !teamMembers.find((teamMember) => teamMember.member.id === member)
          ) {
            await this.dataServices.teamMember.remove({
              team: team.id,
              member: { id: member },
            });
          }
        }),
      );
    }
    return await this.dataServices.team.update({ id: team.id }, editedTeam);
  }

  async deleteTeam(teamId: number) {
    return await this.dataServices.team.remove({ id: teamId });
  }
}
