import { AdminModel } from 'src/core/models';
import { UserModel } from 'src/core/models/user.model';

export type UserSignInResponseType = {
  accessToken: string;
  user: UserModel;
};
