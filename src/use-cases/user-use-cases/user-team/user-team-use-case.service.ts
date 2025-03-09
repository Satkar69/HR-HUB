import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
import { UserTeamFactoryUseCaseService } from './user-team-factory-use-case.service';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { UserEntity } from 'src/frameworks/data-services/pg/entities/user.entity';
import { UserTeamMemberFactoryUseCaseService } from './user-team-member/user-team-member-factory-service';

@Injectable()
export class UserTeamUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private userTeamFactoryUseCaseService: UserTeamFactoryUseCaseService,
    private userTeamMemberFactoryUseCaseService: UserTeamMemberFactoryUseCaseService,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}

  async createTeam(createTeamDto: CreateTeamDto) {
    const userId = this.cls.get<UserEntity>('user')?.id;
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
}
