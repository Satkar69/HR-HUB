import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class PeerNominationUseCaseService {
  constructor(private readonly dataServices: IDataServices) {}

  async getPeerNominationById(peerNominationId: number) {
    return this.dataServices.peerNomination.getOne({ id: peerNominationId });
  }
}
