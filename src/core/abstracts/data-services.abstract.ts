import { AdminModel } from '../models';
import { IAdminRepository } from './repositories/admin.abstract';
import { IGenericRepository } from './generic-repository.abstract';
import { UserModel } from '../models/user.model';

export abstract class IDataServices {
  abstract admin: IAdminRepository<AdminModel>;
  abstract user: IGenericRepository<UserModel>;
}
