import { Injectable } from '@nestjs/common';
import {
  AppClsStore,
  UserClsData,
} from 'src/common/interface/app-cls-store.interface';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';

@Injectable()
export class UserTeamMemberUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private cls: IClsStore<AppClsStore>,
  ) {}

  async getMyTeamMembers(): Promise<IPaginationData> {
    const userId = this.cls.get<UserClsData>('user')?.id;
    return await this.dataServices.teamMember.getAll({
      team: { leader: { id: userId } },
    });
  }
}
