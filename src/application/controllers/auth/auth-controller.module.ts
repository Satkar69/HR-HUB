import { Module } from '@nestjs/common';
import { BcryptModule } from 'src/libs/bcrypt/bcrypt.module';
import { AdminAuthController } from './admin-auth.controller';
import { AdminUserUseCaseModule } from 'src/use-cases/admin-use-cases/admin-user/admin-user-use-case.module';
import { AdminUserAuthController } from './admin-user-auth.controller';
import { AdminFeatUseCaseModule } from 'src/use-cases/admin-use-cases/admin/admin-use-cases.module';

@Module({
  imports: [AdminFeatUseCaseModule, AdminUserUseCaseModule, BcryptModule],
  controllers: [AdminAuthController, AdminUserAuthController],
})
export class AuthControllerModule {}
