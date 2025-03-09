import { ClsStore } from 'nestjs-cls';
import { AdminEntity } from 'src/frameworks/data-services/pg/entities/admin.entity';
import { JwtPayload } from './jwt-playload.interface';
import { IPaginationQuery } from './response/interface/pagination.options.interface';
import { UserRoleEnum } from '../enums/user-role.enum';

export interface AppClsStore extends ClsStore {
  adminUser?: AdminEntity;
  user?: UserClsData;
  isPublic?: boolean;
  isAdmin?: boolean;
  isUser?: boolean;
  isManager?: boolean;
  payload?: JwtPayload;
  paginationQuery?: IPaginationQuery;
}

export interface UserClsData {
  id: number;
  fullname: string;
  email: string;
  role: UserRoleEnum;
  password: string;
}
