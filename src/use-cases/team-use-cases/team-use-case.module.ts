import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { TeamUseCaseService } from './team-use-case.service';

@Module({
  imports: [DataServicesModule],
  providers: [TeamUseCaseService],
  exports: [TeamUseCaseService],
})
export class TeamUseCaseModule {}
