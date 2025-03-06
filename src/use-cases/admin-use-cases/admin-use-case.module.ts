import { Module } from '@nestjs/common';
import { AdminUserUseCasesModule } from './admin-user/admin-user-use-cases.module';
@Module({
  imports: [AdminUserUseCasesModule],
  exports: [AdminUserUseCasesModule],
})
export class AdminUseCasesModule {}
