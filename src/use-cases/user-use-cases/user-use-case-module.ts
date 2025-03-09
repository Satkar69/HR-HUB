import { Module } from '@nestjs/common';
import { UserAuthUseCaseModule } from './user-auth/user-auth-use-case.module';
import { UserTeamUseCaseModule } from './user-team/user-team-use-case.module';

@Module({
  imports: [UserAuthUseCaseModule, UserTeamUseCaseModule],
  exports: [UserAuthUseCaseModule, UserTeamUseCaseModule],
})
export class UserUseCaseModule {}
