import { Module } from '@nestjs/common';
import { UserTeamMemberFactoryUseCaseService } from './user-team-member-factory-service';

@Module({
  providers: [UserTeamMemberFactoryUseCaseService],
  exports: [UserTeamMemberFactoryUseCaseService],
})
export class UserTeamMemberUseCaseModule {}
