import { Injectable } from '@nestjs/common';
import { UserTeamMemberFactoryUseCaseService } from './user-team-member-factory-service';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class UserTeamMemberUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private userTeamMemberFactoryUseCaseService: UserTeamMemberFactoryUseCaseService,
  ) {}
}
