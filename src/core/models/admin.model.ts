import { AdminRoleEnum } from 'src/common/enums/admin-role.enum';
import { AdminEntity } from 'src/frameworks/data-services/pg/entities/admin.entity';

export class AdminModel extends AdminEntity {
  id: number;
  name: string;
  email: string;
  password: string;
  role: AdminRoleEnum;
}
