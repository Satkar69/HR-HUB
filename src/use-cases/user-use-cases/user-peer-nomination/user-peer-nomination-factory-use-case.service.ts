import { Injectable } from '@nestjs/common';
import { PeerNominationModel } from 'src/core/models/peer-nomination.model';
import { UserModel } from 'src/core/models/user.model';
import { PeerNominationDto } from 'src/core/dtos/request/peer-nomination.dto';

@Injectable()
export class UserPeerNominationFactoryUseCaseService {
  createPeerNominationModel(peerNominationDto: PeerNominationDto) {
    const peerNominationModel = new PeerNominationModel();
    if (peerNominationDto.nominator) {
      const userModel = new UserModel();
      userModel.id = peerNominationDto.nominator;
      peerNominationModel.nominator = userModel;
    }
    if (peerNominationDto.nominee) {
      const userModel = new UserModel();
      userModel.id = peerNominationDto.nominee;
      peerNominationModel.nominee = userModel;
    }
    if (peerNominationDto.reviewee) {
      const userModel = new UserModel();
      userModel.id = peerNominationDto.reviewee;
      peerNominationModel.reviewee = userModel;
    }
    if (peerNominationDto.nominationStatus)
      peerNominationModel.nominationStatus = peerNominationDto.nominationStatus;
  }
}
