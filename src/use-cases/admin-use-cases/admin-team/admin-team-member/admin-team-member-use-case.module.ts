import { Module } from '@nestjs/common';
import { AdminTeamMemberFactoryUseCaseService } from './admin-team-member-factory-use-case.service';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { AdminTeamMemberUseCaseService } from './admin-team-member-use-case.service';

@Module({
  imports: [DataServicesModule],
  providers: [
    AdminTeamMemberFactoryUseCaseService,
    AdminTeamMemberUseCaseService,
  ],
  exports: [
    AdminTeamMemberFactoryUseCaseService,
    AdminTeamMemberUseCaseService,
  ],
})
export class AdminTeamMemberUseCaseModule {}
