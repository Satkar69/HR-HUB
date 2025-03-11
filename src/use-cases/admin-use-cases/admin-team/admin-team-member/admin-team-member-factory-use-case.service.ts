import { Injectable } from '@nestjs/common';
import { CreateTeamMemberDto } from 'src/core/dtos/request/teamMember.dto';
import { TeamMemberModel } from 'src/core/models/team-member.model';
import { TeamModel } from 'src/core/models/team.model';
import { UserModel } from 'src/core/models/user.model';

@Injectable()
export class AdminTeamMemberFactoryUseCaseService {
  createTeamMember(createTeamMemberDto: CreateTeamMemberDto) {
    const teamMember = new TeamMemberModel();

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
    if (createTeamMemberDto.isLeader)
      teamMember.isLeader = createTeamMemberDto.isLeader;

    return teamMember;
  }
}
