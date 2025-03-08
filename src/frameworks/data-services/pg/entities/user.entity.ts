import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';
import { TeamEntity } from './team.entity';
import { TeamMemberEntity } from './team-member.entity';
import { ReviewEntity } from './review.entity';
import { PeerNominationEntity } from './peer-nomination.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ name: 'full_name' })
  fullname: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ default: UserRoleEnum.EMPLOYEE, name: 'role' })
  role: UserRoleEnum;

  @OneToMany(() => TeamEntity, (team) => team.leader, { eager: true })
  teams: TeamEntity[];

  @OneToMany(() => TeamMemberEntity, (teamMember) => teamMember.member, {
    eager: true,
  })
  teamMemberShips: TeamMemberEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.reviewer, { eager: true })
  assignedReviews: ReviewEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.reviewee, { eager: true })
  receivedReviews: ReviewEntity[];

  @OneToMany(
    () => PeerNominationEntity,
    (peerNomination) => peerNomination.nominator,
    { eager: true },
  )
  initiatedPeerNominations: PeerNominationEntity[];

  @OneToMany(
    () => PeerNominationEntity,
    (peerNomination) => peerNomination.nominee,
    { eager: true },
  )
  receivedPeerNominations: PeerNominationEntity[];

  toJSON() {
    return { ...this, password: undefined };
  }
}
