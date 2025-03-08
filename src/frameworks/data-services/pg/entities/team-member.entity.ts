import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TeamEntity } from './team.entity';
import { UserEntity } from './user.entity';

@Entity('team_member')
export class TeamMemberEntity extends BaseEntity {
  @ManyToOne(() => TeamEntity)
  @JoinColumn({ name: 'team_id' })
  team: TeamEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  member: UserEntity;

  @Column({ name: 'is_leader', default: false })
  isLeader: boolean;
}
