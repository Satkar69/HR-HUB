import { IDataServices } from 'src/core/abstracts';
import { FcmTokenDto } from 'src/core/dtos/fcm-token.dto';
import { AdminModel } from 'src/core/models';
import { UserModel } from 'src/core/models/user.model';
import { NotificationTokenModel } from 'src/core/models/notification-token.model';
export declare function addFcmToken(dataService: IDataServices, dto: FcmTokenDto, admin?: AdminModel, user?: UserModel): Promise<NotificationTokenModel>;
