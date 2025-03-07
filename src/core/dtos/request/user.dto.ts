import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: 'password too weak' },
  )
  password: string;
  @IsOptional()
  role: UserRoleEnum;
  // isGoogleLogin: boolean;
  // googleId: string;
  // googleAccessToken: string;
  // googleRefreshToken: string;
}

export class UpdateUserDto {
  @IsString()
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty()
  fullname: string;
}

export class UpdateUserPasswordDto {
  @IsString()
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty()
  oldPassword: string;

  @IsString()
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: 'password too weak' },
  )
  newPassword: string;
}
