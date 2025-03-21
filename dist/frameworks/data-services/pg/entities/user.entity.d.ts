import { BaseEntity } from './base.entity';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';
import { TeamEntity } from './team.entity';
import { TeamMemberEntity } from './team-member.entity';
import { ReviewEntity } from './review.entity';
import { PeerNominationEntity } from './peer-nomination.entity';
export declare class UserEntity extends BaseEntity {
    fullname: string;
    email: string;
    password: string;
    role: UserRoleEnum;
    teams: TeamEntity[];
    teamMemberShips: TeamMemberEntity[];
    assignedReviews: ReviewEntity[];
    receivedReviews: ReviewEntity[];
    initiatedPeerNominations: PeerNominationEntity[];
    receivedPeerNominations: PeerNominationEntity[];
    toJSON(): this & {
        password: any;
    };
}
