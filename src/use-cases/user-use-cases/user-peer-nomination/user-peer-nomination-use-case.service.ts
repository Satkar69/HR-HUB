import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { PeerNominationDto } from 'src/core/dtos/request/peer-nomination.dto';
import { UserPeerNominationFactoryUseCaseService } from './user-peer-nomination-factory-use-case.service';

@Injectable()
export class UserPeerNominationUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private userPeerNominationFactoryUseCaseService: UserPeerNominationFactoryUseCaseService,
  ) {}
}
