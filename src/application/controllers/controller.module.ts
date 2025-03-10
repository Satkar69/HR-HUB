import { Module } from '@nestjs/common';
import { AuthControllerModule } from './auth/auth-controller.module';
import { AdminControllerModule } from './admin/admin-controller.module';
import { UserControllerModule } from './user/user-controller.module';
import { TeamControllerModule } from './team/team-controller.module';
import { TeamMemberControllerModule } from './team-member/team-member-controller.module';

@Module({
  imports: [
    AuthControllerModule,
    AdminControllerModule,
    UserControllerModule,
    TeamControllerModule,
    TeamMemberControllerModule,
  ],
  exports: [
    AuthControllerModule,
    AdminControllerModule,
    UserControllerModule,
    TeamControllerModule,
    TeamMemberControllerModule,
  ],
})
export class ControllerModule {}
