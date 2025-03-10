import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import {
  AppClsStore,
  UserClsData,
} from 'src/common/interface/app-cls-store.interface';
import { TeamModel } from 'src/core/models/team.model';

@Injectable()
export class UserTeamUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}

  async getMyTeam(): Promise<TeamModel> {
    const userId = this.cls.get<UserClsData>('user')?.id;
    return await this.dataServices.team.getOne({ leader: { id: userId } });
  }
}
