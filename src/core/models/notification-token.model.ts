import { UserModel } from './user.model';
import { AdminModel } from './admin.model';

export class NotificationTokenModel {
  user: UserModel;
  admin: AdminModel;
  fcmToken: string;
  deviceType: string;
}
