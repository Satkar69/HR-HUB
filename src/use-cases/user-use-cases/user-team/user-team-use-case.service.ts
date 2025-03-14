import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import {
  AppClsStore,
  UserClsData,
} from 'src/common/interface/app-cls-store.interface';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';

@Injectable()
export class UserTeamUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}

  async getMyTeam() {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const user = await this.dataServices.user.getOne({ id: userId });
    if (user.role === UserRoleEnum.EMPLOYEE) {
      const teamMembership = await this.dataServices.teamMember.getOneOrNull({
        member: { id: user.id },
      });
      if (teamMembership) {
        const teamMembers =
          await this.dataServices.teamMember.getAllWithoutPagination({
            id: teamMembership.id,
          });
        const team = await this.dataServices.team.getOne({
          id: teamMembership.team,
        });
        return { ...team, members: teamMembers };
      }
    }
    const team = await this.dataServices.team.getOne({
      leader: { id: user.id },
    });
    const teamMembers =
      await this.dataServices.teamMember.getAllWithoutPagination({
        team: { id: team.id },
      });
    return { ...team, members: teamMembers };
  }
}
