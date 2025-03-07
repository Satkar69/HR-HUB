import { UserRoleEnum } from 'src/common/enums/user-role.enum';

export class UserModel {
  id: number;
  fullname: string;
  email: string;
  password: string;
  role: UserRoleEnum;
}
