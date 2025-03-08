import { Module } from '@nestjs/common';
import { AdminFeatUseCaseModule } from './admin/admin-feat-use-case.module';
@Module({
  imports: [AdminFeatUseCaseModule],
  exports: [AdminFeatUseCaseModule],
})
export class AdminUseCaseModule {}
