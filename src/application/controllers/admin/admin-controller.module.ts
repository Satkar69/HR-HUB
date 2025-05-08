import { Module } from '@nestjs/common';
import { AdminUseCaseModule } from 'src/use-cases/admin-use-cases/admin-use-case.module';
import { AdminController } from './admin.controller';
import { AdminUserController } from './admin-user/admin-user.controller';
import { AdminTeamController } from './admin-team/admin-team.controller';
import { AdminTeamMemberController } from './admin-team/admin-team-member/admin-team-member.controller';
import { AdminDashbaordController } from './admin-dashboard/admin-dashboard.controller';

@Module({
  imports: [AdminUseCaseModule],
  controllers: [
    AdminController,
    AdminUserController,
    AdminTeamController,
    AdminTeamMemberController,
    AdminDashbaordController,
  ],
})
export class AdminControllerModule {}
