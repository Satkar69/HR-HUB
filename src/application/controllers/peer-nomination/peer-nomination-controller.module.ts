import { Module } from '@nestjs/common';
import { PeerNominationUseCaseModule } from 'src/use-cases/peer-nomination-use-cases/peer-nomination-use-case.module';
import { PeerNominationController } from './peer-nomination.controller';

@Module({
  imports: [PeerNominationUseCaseModule],
  controllers: [PeerNominationController],
})
export class PeerNominationControllerModule {}
