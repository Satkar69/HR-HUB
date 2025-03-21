import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { PeerNominationUseCaseService } from './peer-nomination-use-case.service';

@Module({
  imports: [DataServicesModule],
  providers: [PeerNominationUseCaseService],
  exports: [PeerNominationUseCaseService],
})
export class PeerNominationUseCaseModule {}
