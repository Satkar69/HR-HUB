import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { AdminTeamUseCaseService } from './admin-team-use-case.service';
import { AdminTeamFactoryUseCaseService } from './admin-team-factory-use-case.service';

@Module({
  imports: [DataServicesModule],
  providers: [AdminTeamUseCaseService, AdminTeamFactoryUseCaseService],
  exports: [AdminTeamUseCaseService, AdminTeamFactoryUseCaseService],
})
export class AdminTeamUseCaseModule {}
