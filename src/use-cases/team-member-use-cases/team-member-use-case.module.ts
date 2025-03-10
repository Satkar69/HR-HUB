import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { TeamMemberUseCaseService } from './team-member-use-case.service';

@Module({
  imports: [DataServicesModule],
  providers: [TeamMemberUseCaseService],
  exports: [TeamMemberUseCaseService],
})
export class TeamMemberUseCaseModule {}
