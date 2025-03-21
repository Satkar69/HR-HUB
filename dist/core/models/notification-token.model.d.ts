import { UserModel } from './user.model';
import { AdminModel } from './admin.model';
export declare class NotificationTokenModel {
    id: number;
    user: UserModel;
    admin: AdminModel;
    deviceId: string;
    fcmToken: string;
    deviceType: string;
}
