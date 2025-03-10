import { Module } from '@nestjs/common';
import { AdminUseCaseModule } from 'src/use-cases/admin-use-cases/admin-use-case.module';
import { AdminController } from './admin.controller';
import { AdminUserController } from './admin-user/admin-user.controller';

@Module({
  imports: [AdminUseCaseModule],
  controllers: [AdminController, AdminUserController],
})
export class AdminControllerModule {}
