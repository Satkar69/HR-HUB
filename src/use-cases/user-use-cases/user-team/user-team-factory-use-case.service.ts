import { Injectable } from '@nestjs/common';
import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
import { UserModel } from 'src/core/models/user.model';
import { TeamModel } from 'src/core/models/team.model';

@Injectable()
export class UserTeamFactoryUseCaseService {
  createTeam(createTeamDto: CreateTeamDto, userId: number) {
    const team = new TeamModel();
    if (userId) {
      const userModel = new UserModel();
      userModel.id = userId;
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
