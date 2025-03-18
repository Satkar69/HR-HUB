import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { PeerNominationStatusEnum } from 'src/common/enums/peer-nomination-status.enum';

@Entity('peer_nominations')
export class PeerNominationEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, { eager: true })
  @JoinColumn({ name: 'nominator_id' })
  nominator: UserEntity;

  @ManyToOne(() => UserEntity, { eager: true })
  @JoinColumn({ name: 'nominee_id' })
  nominee: UserEntity;

  @ManyToOne(() => UserEntity, { eager: true })
  @JoinColumn({ name: 'reviewee_id' })
  reviewee: UserEntity;

  @Column({
    name: 'nomination_status',
    nullable: false,
    default: PeerNominationStatusEnum.PENDING,
  })
  nominationStatus: PeerNominationStatusEnum;
}
