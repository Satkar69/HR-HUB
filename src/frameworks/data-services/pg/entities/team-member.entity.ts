import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TeamEntity } from './team.entity';
import { UserEntity } from './user.entity';

@Entity('team_member')
@Unique(['member'])
export class TeamMemberEntity extends BaseEntity {
  @ManyToOne(() => TeamEntity)
  @JoinColumn({ name: 'team_id' })
  team: TeamEntity;

  @ManyToOne(() => UserEntity, { eager: true })
  @JoinColumn({ name: 'user_id' })
  member: UserEntity;
}
