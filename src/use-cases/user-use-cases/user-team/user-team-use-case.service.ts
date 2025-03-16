import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import {
  AppClsStore,
  UserClsData,
} from 'src/common/interface/app-cls-store.interface';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';
import AppException from 'src/application/exception/app.exception';

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
      const teamMembership = await this.dataServices.teamMember.getOneOrNull(
        {
          member: { id: user.id },
        },
        { team: true },
      );
      if (!teamMembership) {
        throw new AppException(
          { message: `You are not a member of any team` },
          'You are not a member of any team',
          400,
        );
      }
      const team = await this.dataServices.team.getOne({
        id: teamMembership.team.id,
      });
      const teamMembers =
        await this.dataServices.teamMember.getAllWithoutPagination({
          team: { id: team.id },
        });
      return { ...team, members: teamMembers };
    }

    const team = await this.dataServices.team.getOneOrNull({
      leader: { id: user.id },
    });
    if (!team) {
      throw new AppException(
        { message: `You are not assigned to any team as a leader` },
        'You are not assigned to any team as a leader',
        400,
      );
    }
    const teamMembers =
      await this.dataServices.teamMember.getAllWithoutPagination({
        team: { id: team.id },
      });
    return { ...team, members: teamMembers };
  }
}
