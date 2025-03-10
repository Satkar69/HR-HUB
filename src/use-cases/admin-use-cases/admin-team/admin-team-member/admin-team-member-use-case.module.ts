import { Module } from '@nestjs/common';
import { AdminTeamMemberFactoryUseCaseService } from './admin-team-member-factory-use-case.service';

@Module({
  providers: [AdminTeamMemberFactoryUseCaseService],
  exports: [AdminTeamMemberFactoryUseCaseService],
})
export class AdminTeamMemberUseCaseModule {}
