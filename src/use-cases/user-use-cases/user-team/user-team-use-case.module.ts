import { Module } from '@nestjs/common';
import { UserTeamUseCaseService } from './user-team-use-case.service';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule, ClsServiceModule],
  providers: [UserTeamUseCaseService],
  exports: [UserTeamUseCaseService],
})
export class UserTeamUseCaseModule {}
