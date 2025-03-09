import { Injectable } from '@nestjs/common';
import { UserTeamMemberFactoryUseCaseService } from './user-team-member-factory-service';
import { IDataServices } from 'src/core/abstracts';
import { CreateTeamMemberDto } from 'src/core/dtos/request/teamMember.dto';

@Injectable()
export class UserTeamMemberUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private userTeamMemberFactoryUseCaseService: UserTeamMemberFactoryUseCaseService,
  ) {}

  async createTeamMember(createTeamMemberDto: CreateTeamMemberDto) {
    const newTeamMember =
      this.userTeamMemberFactoryUseCaseService.createTeamMember(
        createTeamMemberDto,
        null,
        null,
      );
    return await this.dataServices.teamMember.create(newTeamMember);
  }

  async removeTeamMember(teamMemberId: number) {
    return await this.dataServices.teamMember.remove({ id: teamMemberId });
  }
}
