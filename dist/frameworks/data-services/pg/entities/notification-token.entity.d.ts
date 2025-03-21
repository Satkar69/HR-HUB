import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { AdminEntity } from './admin.entity';
export declare class NotificationTokenEntity extends BaseEntity {
    user: UserEntity;
    admin: AdminEntity;
    deviceId: string;
    fcmToken: string;
    deviceType: string;
}
