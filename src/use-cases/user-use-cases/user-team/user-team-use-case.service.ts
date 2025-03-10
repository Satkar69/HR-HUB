import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import {
  AppClsStore,
  UserClsData,
} from 'src/common/interface/app-cls-store.interface';
import { TeamModel } from 'src/core/models/team.model';
import { User } from 'src/application/decorators/user.decorator';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';
import AppException from 'src/application/exception/app.exception';

@Injectable()
export class UserTeamUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}

  // todo: bug to be fixed
  async getMyTeam(): Promise<TeamModel> {
    const user = this.cls.get<UserClsData>('user');
    if (user.role === UserRoleEnum.EMPLOYEE) {
      const teamMember = await this.dataServices.teamMember.getOne({
        member: { id: user.id },
      });
      return await this.dataServices.team.getOne({ id: teamMember.team.id });
    } else if (user.role === UserRoleEnum.MANAGER) {
      return await this.dataServices.team.getOne({
        leader: { id: user.id },
      });
    }
  }
}
