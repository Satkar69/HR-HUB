import { PeerNominationModel } from 'src/core/models/peer-nomination.model';
import { PeerNominationDto, UpdatePeerNominationStatusDto } from 'src/core/dtos/request/peer-nomination.dto';
export declare class UserPeerNominationFactoryUseCaseService {
    createPeerNomination(peerNominationDto: PeerNominationDto): PeerNominationModel;
    updatePeerNominationStatus(updatePeerNominationStatusDto: UpdatePeerNominationStatusDto): PeerNominationModel;
}
