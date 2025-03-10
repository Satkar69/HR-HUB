import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { UserTeamMemberUseCaseService } from './user-team-member-use-case.service';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';

@Module({
  imports: [DataServicesModule, ClsServiceModule],
  providers: [UserTeamMemberUseCaseService],
  exports: [UserTeamMemberUseCaseService],
})
export class UserTeamMemberUseCaseModule {}
