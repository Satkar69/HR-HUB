import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { AdminTeamUseCaseService } from './admin-team-use-case.service';
import { AdminTeamFactoryUseCaseService } from './admin-team-factory-use-case.service';
import { AdminTeamMemberUseCaseModule } from './admin-team-member/admin-team-member-use-case.module';

@Module({
  imports: [DataServicesModule, AdminTeamMemberUseCaseModule],
  providers: [AdminTeamUseCaseService, AdminTeamFactoryUseCaseService],
  exports: [AdminTeamUseCaseService, AdminTeamFactoryUseCaseService],
})
export class AdminTeamUseCaseModule {}
