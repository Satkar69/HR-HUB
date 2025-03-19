import { Injectable } from '@nestjs/common';
import AppException from 'src/application/exception/app.exception';
import { IDataServices } from 'src/core/abstracts';
import { UserModel } from 'src/core/models/user.model';
import { NotificationModel } from 'src/core/models/notification.model';
import { UserNotificationModel } from 'src/core/models/user-notification.model';
import { FirebaseService } from '../firebase/firebase.service';
import { In, IsNull, Not } from 'typeorm';
import { AdminModel } from 'src/core/models';
import { SendTestNotificationDto } from 'src/core/dtos/send-test-nottification.dto';

export class CreateNotificationDto {
  title: string;
  body: string;
  type: string;
  isGlobal: boolean;
  data: object;
}

@Injectable()
export class PushNotificationService {
  constructor(
    private readonly dataServices: IDataServices,
    private readonly firebaseService: FirebaseService,
  ) {}

  // create notification
  async createNotification(dto: CreateNotificationDto) {
    try {
      const notification = await this.dataServices.notification.create({
        title: dto.title,
        body: dto.body,
        type: dto.type,
        isGlobal: dto.isGlobal,
        data: dto.data,
      });
      return notification;
    } catch (error) {
      console.log('Notification:: error ', error);
    }
  }

  async createNotificationForUsers(
    userIds: number[],
    notification: NotificationModel,
  ) {
    try {
      const userNotificationPromises = userIds.map((userId) => {
        return this.dataServices.userNotification.create({
          user: {
            id: +userId,
          } as UserModel,
          notification: notification,
        } as UserNotificationModel);
      });

      await Promise.all(userNotificationPromises);
    } catch (error) {
      console.log('Notification:: error ', error);
    }
  }

  async createNotificationForUser(
    userId: number,
    notification: NotificationModel,
  ) {
    try {
      await this.dataServices.userNotification.create({
        user: {
          id: +userId,
        } as UserModel,
        notification: notification,
      } as UserNotificationModel);
    } catch (error) {
      console.log('Notification:: error ', error);
    }
  }

  async createNotificationForAdmins(
    adminIds: number[],
    notification: NotificationModel,
  ) {
    try {
      const adminNotificationPromises = adminIds.map((adminId) => {
        console.log('admin is ', adminId);
        return this.dataServices.userNotification.create({
          admin: {
            id: +adminId,
          } as AdminModel,
          notification: notification,
        } as UserNotificationModel);
      });

      await Promise.all(adminNotificationPromises);
    } catch (error) {
      console.log('Notification:: error ', error);
    }
  }

  async sendNotificationToAllUsers<T = any>(
    title: string,
    body: string,
    options?: { data?: T },
  ) {
    try {
      const userNotificationTokens =
        await this.dataServices.notificationToken.getAllWithoutPagination(
          {
            user: Not(IsNull()),
          },
          { user: true },
        );
      const notification = await this.createNotification({
        title,
        body,
        type: 'notification',
        isGlobal: true,
        data: (options?.data || {}) as any,
      });
      await this.createNotificationForUsers(
        // map and remove duplicate ids
        [
          ...new Set(
            userNotificationTokens.map((userToken) => userToken.user.id),
          ),
        ],
        notification,
      );
      const registrationTokens = userNotificationTokens.map(
        (user) => user.fcmToken,
      );

      for (let i = 0; i < registrationTokens.length; i++) {
        try {
          await this.firebaseService.sendNotification(
            registrationTokens[i],
            notification,
            (options?.data || {}) as any,
          );
        } catch (err) {
          console.log('sending error here', err);
        }
      }
    } catch (error) {
      console.log('Notification:: error', error);
    }
  }

  async sendNotificationToAllAdmins<T = any>(
    title: string,
    body: string,
    options?: { data?: T },
  ) {
    try {
      const adminNotificationTokens =
        await this.dataServices.notificationToken.getAllWithoutPagination(
          {
            admin: Not(IsNull()),
          },
          { admin: true },
        );
      const notification = await this.createNotification({
        title,
        body,
        type: 'notification',
        isGlobal: true,
        data: (options?.data || {}) as any,
      });
      await this.createNotificationForAdmins(
        // map and remove duplicate ids
        [
          ...new Set(
            adminNotificationTokens.map((adminToken) => adminToken.admin.id),
          ),
        ],
        notification,
      );
      const registrationTokens = adminNotificationTokens.map(
        (admin) => admin.fcmToken,
      );

      for (let i = 0; i < registrationTokens.length; i++) {
        try {
          await this.firebaseService.sendNotification(
            registrationTokens[i],
            notification,
            (options?.data || {}) as any,
          );
        } catch (err) {
          console.log('sending error here', err);
        }
      }
    } catch (error) {
      console.log('Notification:: error', error);
    }
  }

  async sendNotificationToSpecificUsers<T = any>(
    title: string,
    body: string,
    userIds: number[],
    options?: {
      data?: T;
    },
  ) {
    try {
      const userNotificationTokens =
        await this.dataServices.notificationToken.getAllWithoutPagination({
          user: {
            id: In(userIds),
          },
        });
      if (!userNotificationTokens.length) {
        throw new AppException({}, 'No users exist for the provided ids', 404);
      }
      const notification = await this.createNotification({
        title,
        body,
        type: 'notification',
        isGlobal: false,
        data: (options?.data || {}) as any,
      });
      await this.createNotificationForUsers(userIds, notification);
      const registrationTokens = userNotificationTokens.map(
        (userToken) => userToken.fcmToken,
      );

      for (let i = 0; i < registrationTokens.length; i++) {
        try {
          await this.firebaseService.sendNotification(
            registrationTokens[i],
            notification,
            (options?.data || {}) as any,
          );
        } catch (err) {
          console.log('sending error here', err);
        }
      }
    } catch (error) {
      console.log('Notification:: error', error);
    }
  }

  async sendNotificationToSpecificUser<T = any>(
    title: string,
    body: string,
    userId: number,
    options?: {
      data?: T;
    },
  ) {
    try {
      const userNotificationToken =
        await this.dataServices.notificationToken.getOneOrNull({
          user: {
            id: userId,
          },
        });
      if (!userNotificationToken) {
        throw new AppException({}, 'No user exists for the provided id', 404);
      }
      const notification = await this.createNotification({
        title,
        body,
        type: 'notification',
        isGlobal: false,
        data: (options?.data || {}) as any,
      });
      await this.createNotificationForUser(userId, notification);
      try {
        await this.firebaseService.sendNotification(
          userNotificationToken.fcmToken,
          notification,
          (options?.data || {}) as any,
        );
      } catch (err) {
        console.log('sending error here', err);
      }
    } catch (error) {
      console.log('Notification:: error', error);
    }
  }

  async sendTestNotification(dto: SendTestNotificationDto) {
    return await this.firebaseService.sendNotification(dto.fcmToken, {
      title: 'Test notification',
      body: dto.message,
    } as NotificationModel);
  }
}
