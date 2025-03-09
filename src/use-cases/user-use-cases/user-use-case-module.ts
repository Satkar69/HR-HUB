import { Module } from '@nestjs/common';
import { UserAuthUseCaseModule } from './user-auth/user-auth-use-case.module';
import { UserTeamUseCaseModule } from './user-team/user-team-use-case.module';
import { UserTeamMemberUseCaseModule } from './user-team/user-team-member/user-team-member-use-case.module';

@Module({
  imports: [
    UserAuthUseCaseModule,
    UserTeamUseCaseModule,
    UserTeamMemberUseCaseModule,
  ],
  exports: [
    UserAuthUseCaseModule,
    UserTeamUseCaseModule,
    UserTeamMemberUseCaseModule,
  ],
})
export class UserUseCaseModule {}
