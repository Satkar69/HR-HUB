import { Injectable } from '@nestjs/common';
import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
import { UserModel } from 'src/core/models/user.model';
import { TeamModel } from 'src/core/models/team.model';

@Injectable()
export class AdminTeamFactoryUseCaseService {
  createTeam(createTeamDto: CreateTeamDto) {
    const team = new TeamModel();
    if (createTeamDto.leader) {
      const userModel = new UserModel();
      userModel.id = createTeamDto.leader;
      team.leader = userModel;
    }
    if (createTeamDto.department) team.department = createTeamDto.department;
    return team;
  }
  updateTeam(team: TeamModel, updateTeamDto: UpdateTeamDto) {
    if (updateTeamDto.department) team.department = updateTeamDto.department;
    return team;
  }
}
