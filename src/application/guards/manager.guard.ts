import { CanActivate, Injectable } from '@nestjs/common';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import AppUnauthorizedException from '../exception/app-unauthorized.exception';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';

@Injectable()
export class ManagerGuard implements CanActivate {
  constructor(
    private readonly cls: IClsStore<AppClsStore>,
    private readonly dataServices: IDataServices,
  ) {}

  async canActivate(): Promise<boolean> {
    const isPublic = this.cls.get<boolean>('isPublic');
    if (isPublic) {
      return true;
    }
    const isManager = this.cls.get<boolean>('isManager');
    if (isManager) {
      const payload = this.cls.get<any>('payload');
      const user = await this.dataServices.user.getOneOrNull({
        email: payload.sub,
      });
      if (user.role !== UserRoleEnum.MANAGER) {
        throw new AppUnauthorizedException(
          'Only manager are authorized to perform this action.',
        );
      }
    }

    return true;
  }
}
