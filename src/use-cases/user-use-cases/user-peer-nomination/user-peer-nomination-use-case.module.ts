import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { UserPeerNominationFactoryUseCaseService } from './user-peer-nomination-factory-use-case.service';
import { UserPeerNominationUseCaseService } from './user-peer-nomination-use-case.service';

@Module({
  imports: [DataServicesModule],
  providers: [
    UserPeerNominationFactoryUseCaseService,
    UserPeerNominationUseCaseService,
  ],
  exports: [
    UserPeerNominationFactoryUseCaseService,
    UserPeerNominationUseCaseService,
  ],
})
export class UserPeerNominationUseCaseModule {}
