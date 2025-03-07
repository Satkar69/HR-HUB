import { Module } from '@nestjs/common';
import { AdminFeatUseCaseModule } from './admin/admin-use-cases.module';
@Module({
  imports: [AdminFeatUseCaseModule],
  exports: [AdminFeatUseCaseModule],
})
export class AdminUseCaseModule {}
