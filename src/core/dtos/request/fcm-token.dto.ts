import { IsEnum, IsString } from 'class-validator';
import { DeviceTypeEnum } from 'src/common/enums/device-type.enum';

export class FcmTokenDto {
  @IsString()
  deviceId: string;

  @IsString()
  fcmToken: string;

  @IsString()
  @IsEnum(DeviceTypeEnum)
  deviceType: string;
}
