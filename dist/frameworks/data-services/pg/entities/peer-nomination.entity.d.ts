import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { PeerNominationStatusEnum } from 'src/common/enums/peer-nomination-status.enum';
export declare class PeerNominationEntity extends BaseEntity {
    nominator: UserEntity;
    nominee: UserEntity;
    reviewee: UserEntity;
    nominationStatus: PeerNominationStatusEnum;
}
