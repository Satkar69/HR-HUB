import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateTeamDto } from 'src/core/dtos/request/team.dto';
import { AdminTeamFactoryUseCaseService } from './admin-team-factory-use-case.service';

@Injectable()
export class AdminTeamUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private adminTeamFactoryUseCaseService: AdminTeamFactoryUseCaseService,
  ) {}

  async createTeam(createTeamDto: CreateTeamDto) {
    const newTeam =
      this.adminTeamFactoryUseCaseService.createTeam(createTeamDto);
    return await this.dataServices.team.create(newTeam);
  }
}
