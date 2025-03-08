import { TeamModel } from './team.model';
import { UserModel } from './user.model';

export class TeamMemberModel {
  id: number;
  team: TeamModel;
  member: UserModel;
  isLeader: boolean;
}
