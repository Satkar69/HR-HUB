import { Module } from '@nestjs/common';
import { UserTeamController } from './user-team/user-team-controller';
import { UserUseCaseModule } from 'src/use-cases/user-use-cases/user-use-case-module';
import { UserTeamMemberController } from './user-team/user-team-member/user-team-member-controller';
import { UserController } from './user-controller';
import { UserReviewController } from './user-review/user-review.controller';

@Module({
  imports: [UserUseCaseModule],
  controllers: [
    UserController,
    UserTeamController,
    UserTeamMemberController,
    UserReviewController,
  ],
})
export class UserControllerModule {}
