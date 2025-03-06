import { ClsStore } from 'nestjs-cls';
import { AdminEntity } from 'src/frameworks/data-services/pg/entities/admin.entity';
import { JwtPayload } from './jwt-playload.interface';
import { IPaginationQuery } from './response/interface/pagination.options.interface';
export interface AppClsStore extends ClsStore {
  adminUser?: AdminEntity;
  isPublic?: boolean;
  isAdmin?: boolean;
  payload?: JwtPayload;
  paginationQuery?: IPaginationQuery;
}
