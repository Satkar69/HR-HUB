import { Module } from '@nestjs/common';
import { BcryptModule } from 'src/libs/bcrypt/bcrypt.module';
import { AdminAuthController } from './admin-auth.controller';
import { AdminUserUseCaseModule } from 'src/use-cases/admin-use-cases/admin-user/admin-user-use-case.module';
import { AdminUserAuthController } from './admin-user-auth.controller';
import { AdminFeatUseCaseModule } from 'src/use-cases/admin-use-cases/admin/admin-use-cases.module';
import { UserAuthUseCaseModule } from 'src/use-cases/user-use-cases/user-auth/user-auth-use-case.module';
import { UserAuthController } from './user-auth.controller';

@Module({
  imports: [
    AdminFeatUseCaseModule,
    AdminUserUseCaseModule,
    UserAuthUseCaseModule,
    BcryptModule,
  ],
  controllers: [
    AdminAuthController,
    AdminUserAuthController,
    UserAuthController,
  ],
})
export class AuthControllerModule {}
