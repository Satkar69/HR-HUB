import { CanActivate, Injectable } from '@nestjs/common';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import AppUnauthorizedException from '../exception/app-unauthorized.exception';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private readonly cls: IClsStore<AppClsStore>,
    private readonly dataServices: IDataServices,
  ) {}

  async canActivate(): Promise<boolean> {
    const isPublic = this.cls.get<boolean>('isPublic');
    if (isPublic) {
      return true;
    }
    const isUser = this.cls.get<boolean>('isUser');
    if (isUser) {
      const payload = this.cls.get<any>('payload');
      console.log('payload', payload);
      if (!payload) {
        throw new AppUnauthorizedException(
          'Invalid token. Please login again.',
        );
      }
      const user = await this.dataServices.user.getOneOrNull({
        email: payload.sub,
      });
      if (!user) {
        throw new AppUnauthorizedException(
          'Invalid token. Please login again.',
        );
      }
      this.cls.set('user', user);
    }

    return true;
  }
}
