import { BaseEntity } from './base.entity';
import { AdminRoleEnum } from 'src/common/enums/admin-role.enum';
export declare class AdminEntity extends BaseEntity {
    name: string;
    email: string;
    password: string;
    role: AdminRoleEnum;
    comparePassword(password: string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
    hashPasswordBeforeInsert(): Promise<void>;
    toJSON(): this & {
        password: any;
    };
}
