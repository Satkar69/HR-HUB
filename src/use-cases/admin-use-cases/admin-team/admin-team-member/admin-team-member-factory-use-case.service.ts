import { Injectable } from '@nestjs/common';
import { CreateTeamMemberDto } from 'src/core/dtos/request/teamMember.dto';
import { TeamMemberModel } from 'src/core/models/team-member.model';
import { TeamModel } from 'src/core/models/team.model';
import { UserModel } from 'src/core/models/user.model';

@Injectable()
export class AdminTeamMemberFactoryUseCaseService {
  createTeamMember(
    createTeamMemberDto: CreateTeamMemberDto | null,
    teamId: number | null,
    userId: number | null,
  ) {
    const teamMember = new TeamMemberModel();

    if (createTeamMemberDto) {
      if (createTeamMemberDto.team) {
        const teamModel = new TeamModel();
        teamModel.id = createTeamMemberDto.team;
        teamMember.team = teamModel;
      }
      if (createTeamMemberDto.member) {
        const userModel = new UserModel();
        userModel.id = createTeamMemberDto.member;
        teamMember.member = userModel;
      }
    }

    if (teamId) {
      const teamModel = new TeamModel();
      teamModel.id = teamId;
      teamMember.team = teamModel;
    }

    if (userId) {
      const userModel = new UserModel();
      userModel.id = userId;
      teamMember.member = userModel;
    }

    return teamMember;
  }
}
