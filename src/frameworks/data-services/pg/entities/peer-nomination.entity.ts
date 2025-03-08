import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { ReviewEntity } from './review.entity';
import { PeerNominationStatusEnum } from 'src/common/enums/peer-nomination-status.enum';

@Entity('peer_nominations')
export class PeerNominationEntity extends BaseEntity {
  @ManyToOne(() => ReviewEntity)
  @JoinColumn({ name: 'review_id' })
  review: ReviewEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'nominator_id' })
  nominator: UserEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'nominee_id' })
  nominee: UserEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'reviewee_id' })
  reviewee: UserEntity;

  @Column({ name: 'nomination_status' })
  nominationStatus: PeerNominationStatusEnum;
}
