import { app } from 'firebase-admin';
import { NotificationModel } from 'src/core/models/notification.model';
export declare class FirebaseService {
    #private;
    private firebaseApp;
    constructor(firebaseApp: app.App);
    sendNotification(token: string, notification: NotificationModel, data?: object): Promise<string>;
}
