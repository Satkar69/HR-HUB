import { Module } from '@nestjs/common';
import { AuthControllerModule } from './auth/auth-controller.module';
import { AdminControllerModule } from './admin/admin-controller.module';

@Module({
  imports: [AuthControllerModule, AdminControllerModule],
  exports: [AuthControllerModule, AdminControllerModule],
})
export class ControllerModule {}
