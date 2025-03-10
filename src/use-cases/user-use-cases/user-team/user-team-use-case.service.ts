import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateTeamDto } from 'src/core/dtos/request/team.dto';
import { UserTeamFactoryUseCaseService } from './user-team-factory-use-case.service';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import {
  AppClsStore,
  UserClsData,
} from 'src/common/interface/app-cls-store.interface';
import { UserTeamMemberFactoryUseCaseService } from './user-team-member/user-team-member-factory-service';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';

@Injectable()
export class UserTeamUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private userTeamFactoryUseCaseService: UserTeamFactoryUseCaseService,
    private userTeamMemberFactoryUseCaseService: UserTeamMemberFactoryUseCaseService,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}

  async createTeam(createTeamDto: CreateTeamDto) {
    const userId = this.cls.get<UserClsData>('user')?.id;
    const newTeam = this.userTeamFactoryUseCaseService.createTeam(
      createTeamDto,
      userId,
    );
    const createdTeam = await this.dataServices.team.create(newTeam);
    const leaderTeamMemberShip =
      this.userTeamMemberFactoryUseCaseService.createTeamMember(
        null,
        createdTeam.id,
        userId,
      );
    leaderTeamMemberShip.isLeader = true;
    await this.dataServices.teamMember.create(leaderTeamMemberShip);
    return createdTeam;
  }

  async getMyTeams(): Promise<IPaginationData> {
    const userId = this.cls.get<UserClsData>('user')?.id;
    return await this.dataServices.team.getAll({ leader: userId });
  }
}
