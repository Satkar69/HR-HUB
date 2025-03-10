import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class TeamUseCaseService {
  constructor(private dataServices: IDataServices) {}

  // todo :: make corresponding routes in the controller
  async getTeambyId(teamId: number) {
    return await this.dataServices.team.getOne({ id: teamId });
  }
}
