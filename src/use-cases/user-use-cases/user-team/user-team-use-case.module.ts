import { Module } from '@nestjs/common';
import { UserTeamMemberUseCaseModule } from './user-team-member/user-team-member-use-case.module';
import { UserTeamUseCaseService } from './user-team-use-case.service';
import { UserTeamFactoryUseCaseService } from './user-team-factory-use-case.service';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule, UserTeamMemberUseCaseModule, ClsServiceModule],
  providers: [UserTeamFactoryUseCaseService, UserTeamUseCaseService],
  exports: [UserTeamFactoryUseCaseService, UserTeamUseCaseService],
})
export class UserTeamUseCaseModule {}
