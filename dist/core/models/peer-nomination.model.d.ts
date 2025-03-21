import { PeerNominationStatusEnum } from 'src/common/enums/peer-nomination-status.enum';
import { UserModel } from './user.model';
export declare class PeerNominationModel {
    id: number;
    nominator: UserModel;
    nominee: UserModel;
    reviewee: UserModel;
    nominationStatus: PeerNominationStatusEnum;
}
