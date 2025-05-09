import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Match } from 'src/application/decorators/match.decorator';
import { DeviceTypeEnum } from 'src/common/enums/device-type.enum';

export class SigninDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  deviceId: string;

  @IsOptional()
  @IsString()
  fcmToken: string;

  @IsOptional()
  @IsString()
  @IsEnum(DeviceTypeEnum)
  deviceType: string;
}

export class ForgotPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class ResetPasswordDto {
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @Match('password')
  confirmPassword: string;
}

export class CheckTokenDto {
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty()
  token: string;
}
