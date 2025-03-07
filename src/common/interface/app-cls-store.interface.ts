import { ClsStore } from 'nestjs-cls';
import { AdminEntity } from 'src/frameworks/data-services/pg/entities/admin.entity';
import { JwtPayload } from './jwt-playload.interface';
import { IPaginationQuery } from './response/interface/pagination.options.interface';
import { UserEntity } from 'src/frameworks/data-services/pg/entities/user.entity';

export interface AppClsStore extends ClsStore {
  adminUser?: AdminEntity;
  user?: UserEntity;
  isPublic?: boolean;
  isAdmin?: boolean;
  isUser?: boolean;
  payload?: JwtPayload;
  paginationQuery?: IPaginationQuery;
}
