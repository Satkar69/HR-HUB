import { IDataServices } from 'src/core/abstracts';
import { FcmTokenDto } from 'src/core/dtos/request/fcm-token.dto';
import { AdminModel } from 'src/core/models';
import { UserModel } from 'src/core/models/user.model';
import { NotificationTokenModel } from 'src/core/models/notification-token.model';
import AppException from 'src/application/exception/app.exception';

export async function addFcmToken(
  dataService: IDataServices,
  dto: FcmTokenDto,
  admin?: AdminModel,
  user?: UserModel,
) {
  if (!admin && !user) {
    throw new AppException({}, 'Investor or Admin is required', 500);
  }
  const condition: {
    admin?: {
      id: number;
    };
    user?: {
      id: number;
    };
    deviceId?: string;
  } = {
    deviceId: dto.deviceId,
  };

  if (admin) condition.admin = { id: admin.id };
  else condition.user = { id: user.id };

  // checking if user device with same user id and device id already exists
  const existingDevice =
    await dataService.notificationToken.getOneOrNull(condition);

  // if device already exists, update the fcm token
  if (existingDevice) {
    // existingDevice.fcmToken = dto.fcmToken;
    return await dataService.notificationToken.update(
      {
        id: existingDevice.id,
      },
      {
        fcmToken: dto.fcmToken,
      } as NotificationTokenModel,
    );
  }

  // if device does not exist, create a new device
  const newNotificationToken = new NotificationTokenModel();
  newNotificationToken.deviceId = dto.deviceId;
  newNotificationToken.fcmToken = dto.fcmToken;
  newNotificationToken.deviceType = dto.deviceType;
  if (admin) newNotificationToken.admin = admin;
  else newNotificationToken.user = user;

  return await dataService.notificationToken.create(newNotificationToken);
}
