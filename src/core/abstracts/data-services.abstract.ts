import { AdminModel } from '../models';
import { IAdminRepository } from './repositories/admin.abstract';

export abstract class IDataServices {
  abstract admin: IAdminRepository<AdminModel>;
}
