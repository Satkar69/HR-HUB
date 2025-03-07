import { Module } from '@nestjs/common';
import { UserAuthUseCaseModule } from './user-auth/user-auth-use-case.module';

@Module({
  imports: [UserAuthUseCaseModule],
  exports: [UserAuthUseCaseModule],
})
export class UserUseCaseModule {}
