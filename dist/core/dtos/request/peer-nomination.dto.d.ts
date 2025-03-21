import { PeerNominationStatusEnum } from 'src/common/enums/peer-nomination-status.enum';
export declare class PeerNominationDto {
    nominator: number;
    nominee: number;
    reviewee: number;
    nominationStatus: PeerNominationStatusEnum;
}
export declare class UpdatePeerNominationStatusDto {
    nominationStatus: PeerNominationStatusEnum;
}
