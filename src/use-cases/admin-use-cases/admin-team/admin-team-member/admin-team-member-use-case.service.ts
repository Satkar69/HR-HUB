import { Injectable } from '@nestjs/common';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class AdminTeamMemberUseCaseService {
  constructor(private dataServices: IDataServices) {}

  async getTeamMembers(): Promise<IPaginationData> {
    return await this.dataServices.teamMember.getAll();
  }
}
