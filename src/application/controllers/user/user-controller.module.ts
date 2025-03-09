import { Module } from '@nestjs/common';
import { UserTeamController } from './user-team/user-team-controller';
import { UserUseCaseModule } from 'src/use-cases/user-use-cases/user-use-case-module';

@Module({
  imports: [UserUseCaseModule],
  controllers: [UserTeamController],
})
export class UserControllerModule {}
