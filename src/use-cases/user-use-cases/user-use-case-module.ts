import { Module } from '@nestjs/common';
import { UserAuthUseCaseModule } from './user-auth/user-auth-use-case.module';
import { UserTeamUseCaseModule } from './user-team/user-team-use-case.module';
import { UserTeamMemberUseCaseModule } from './user-team/user-team-member/user-team-member-use-case.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { UserUseCaseService } from './user-use-case.service';

@Module({
  imports: [
    DataServicesModule,
    UserAuthUseCaseModule,
    UserTeamUseCaseModule,
    UserTeamMemberUseCaseModule,
  ],
  providers: [UserUseCaseService],
  exports: [
    UserUseCaseService,
    UserAuthUseCaseModule,
    UserTeamUseCaseModule,
    UserTeamMemberUseCaseModule,
  ],
})
export class UserUseCaseModule {}
