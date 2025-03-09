import { Module } from '@nestjs/common';
import { UserTeamMemberFactoryUseCaseService } from './user-team-member-factory-service';
import { DataServicesModule } from 'src/services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [UserTeamMemberFactoryUseCaseService],
  exports: [UserTeamMemberFactoryUseCaseService],
})
export class UserTeamMemberUseCaseModule {}
