import { Module } from '@nestjs/common';
import { AdminUseCaseModule } from 'src/use-cases/admin-use-cases/admin-use-case.module';
import { AdminController } from './admin.controller';

@Module({
  imports: [AdminUseCaseModule],
  controllers: [AdminController],
})
export class AdminControllerModule {}
