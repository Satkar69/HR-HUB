import { UserModel } from './user.model';

export class TeamModel {
  id: number;
  leader: UserModel;
  department: string;
}
