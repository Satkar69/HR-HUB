import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ name: 'full_name' })
  fullname: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ default: UserRoleEnum.EMPLOYEE, name: 'role' })
  role: UserRoleEnum;

  toJSON() {
    return { ...this, password: undefined };
  }
}
