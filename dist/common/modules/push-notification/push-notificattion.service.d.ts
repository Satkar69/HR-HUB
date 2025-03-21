import { IDataServices } from 'src/core/abstracts';
import { NotificationModel } from 'src/core/models/notification.model';
import { FirebaseService } from '../firebase/firebase.service';
import { SendTestNotificationDto } from 'src/core/dtos/send-test-nottification.dto';
export declare class CreateNotificationDto {
    title: string;
    body: string;
    type: string;
    isGlobal: boolean;
    data: object;
}
export declare class PushNotificationService {
    private readonly dataServices;
    private readonly firebaseService;
    constructor(dataServices: IDataServices, firebaseService: FirebaseService);
    createNotification(dto: CreateNotificationDto): Promise<NotificationModel>;
    createNotificationForUsers(userIds: number[], notification: NotificationModel): Promise<void>;
    createNotificationForUser(userId: number, notification: NotificationModel): Promise<void>;
    createNotificationForAdmins(adminIds: number[], notification: NotificationModel): Promise<void>;
    sendNotificationToAllUsers<T = any>(title: string, body: string, options?: {
        data?: T;
    }): Promise<void>;
    sendNotificationToAllAdmins<T = any>(title: string, body: string, options?: {
        data?: T;
    }): Promise<void>;
    sendNotificationToSpecificUsers<T = any>(title: string, body: string, userIds: number[], options?: {
        data?: T;
    }): Promise<void>;
    sendNotificationToSpecificUser<T = any>(title: string, body: string, userId: number, options?: {
        data?: T;
    }): Promise<void>;
    sendTestNotification(dto: SendTestNotificationDto): Promise<string>;
}
