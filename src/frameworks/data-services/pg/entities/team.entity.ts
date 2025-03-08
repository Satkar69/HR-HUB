import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { TeamMemberEntity } from './team-member.entity';

@Entity('teams')
export class TeamEntity extends BaseEntity {
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  leader: UserEntity;

  @Column({ name: 'department', unique: true })
  department: string;
}
