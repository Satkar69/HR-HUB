import { AdminRoleEnum } from 'src/common/enums/admin-role.enum';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: AdminRoleEnum[]) => import("@nestjs/common").CustomDecorator<string>;
