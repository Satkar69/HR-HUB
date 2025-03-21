import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class SendTestNotificationDto {
  @IsString()
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty()
  message: string;

  @IsString()
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty()
  fcmToken: string;
}
