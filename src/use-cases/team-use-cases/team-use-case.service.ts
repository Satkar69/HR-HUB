import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class TeamUseCaseService {
  constructor(private dataServices: IDataServices) {}

  // todo :: make corresponding routes in the controller
  async getTeambyId(teamId: number) {
    const teamMembers =
      await this.dataServices.teamMember.getAllWithoutPagination({
        team: { id: teamId },
      });
    const team = await this.dataServices.team.getOne({ id: teamId });
    return { ...team, members: teamMembers };
  }
}
