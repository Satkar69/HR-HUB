import { AdminModel } from './admin.model';
import { NotificationModel } from './notification.model';
import { UserModel } from './user.model';
export declare class UserNotificationModel {
    user: UserModel;
    admin: AdminModel;
    notification: NotificationModel;
    isRead?: boolean;
    readAt?: Date;
}
