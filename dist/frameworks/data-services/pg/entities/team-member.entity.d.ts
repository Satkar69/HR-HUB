import { BaseEntity } from './base.entity';
import { TeamEntity } from './team.entity';
import { UserEntity } from './user.entity';
export declare class TeamMemberEntity extends BaseEntity {
    team: TeamEntity;
    member: UserEntity;
}
