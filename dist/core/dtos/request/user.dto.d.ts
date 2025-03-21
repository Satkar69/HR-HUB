import { UserRoleEnum } from 'src/common/enums/user-role.enum';
export declare class CreateUserDto {
    fullname: string;
    email: string;
    password: string;
    role: UserRoleEnum;
}
export declare class UpdateUserDto {
    fullname: string;
}
export declare class UpdateUserPasswordDto {
    oldPassword: string;
    newPassword: string;
}
