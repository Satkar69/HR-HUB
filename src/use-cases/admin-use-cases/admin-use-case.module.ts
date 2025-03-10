import { Module } from '@nestjs/common';
import { AdminFeatUseCaseModule } from './admin/admin-feat-use-case.module';
import { AdminUserUseCaseModule } from './admin-user/admin-user-use-case.module';
@Module({
  imports: [AdminFeatUseCaseModule, AdminUserUseCaseModule],
  exports: [AdminFeatUseCaseModule, AdminUserUseCaseModule],
})
export class AdminUseCaseModule {}
