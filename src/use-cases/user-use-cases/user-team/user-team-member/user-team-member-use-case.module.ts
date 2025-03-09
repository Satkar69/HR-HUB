import { Module } from '@nestjs/common';
import { UserTeamMemberFactoryUseCaseService } from './user-team-member-factory-service';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { UserTeamMemberUseCaseService } from './user-team-member-use-case.service';

@Module({
  imports: [DataServicesModule],
  providers: [
    UserTeamMemberFactoryUseCaseService,
    UserTeamMemberUseCaseService,
  ],
  exports: [UserTeamMemberFactoryUseCaseService, UserTeamMemberUseCaseService],
})
export class UserTeamMemberUseCaseModule {}
