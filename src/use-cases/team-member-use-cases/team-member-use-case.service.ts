import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class TeamMemberUseCaseService {
  constructor(private dataServices: IDataServices) {}

  async getTeamMemberbyId(teamMemberId: number) {
    return await this.dataServices.teamMember.getOne({ id: teamMemberId });
  }
}
