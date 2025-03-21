import { BaseEntity } from './base.entity';
import { NotificationEntity } from './nottification.entity';
import { UserEntity } from './user.entity';
import { AdminEntity } from './admin.entity';
export declare class UserNotificationEntity extends BaseEntity {
    user: UserEntity;
    admin: AdminEntity;
    notification: NotificationEntity;
    isRead: boolean;
    readAt: Date;
}
