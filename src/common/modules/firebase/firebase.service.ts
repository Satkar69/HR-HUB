import { Inject, Injectable } from '@nestjs/common';
import { app } from 'firebase-admin';
import AppException from 'src/application/exception/app.exception';
import { NotificationModel } from 'src/core/models/notification.model';

@Injectable()
export class FirebaseService {
  #db: FirebaseFirestore.Firestore;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.#db = firebaseApp.firestore();
  }

  async sendNotification(
    token: string,
    notification: NotificationModel,
    data?: object,
  ) {
    try {
      console.log('notification', data);
      const message = {
        notification: {
          title: notification.title,
          body: notification.body,
        },
        data: (data ?? {}) as any,
        token: token,
      };
      return await this.firebaseApp.messaging().send(message);
    } catch (er) {
      console.log(er);
      throw new AppException({}, er.message, 401);
    }
  }
}
