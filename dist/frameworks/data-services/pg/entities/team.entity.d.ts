import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
export declare class TeamEntity extends BaseEntity {
    leader: UserEntity;
    department: string;
}
