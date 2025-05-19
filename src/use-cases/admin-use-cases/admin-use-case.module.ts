import { Module } from '@nestjs/common';
import { AdminFeatUseCaseModule } from './admin/admin-feat-use-case.module';
import { AdminUserUseCaseModule } from './admin-user/admin-user-use-case.module';
import { AdminTeamUseCaseModule } from './admin-team/admin-team-use-case.module';
import { AdminTeamMemberUseCaseModule } from './admin-team/admin-team-member/admin-team-member-use-case.module';
import { AdminDashboardUseCaseModule } from './admin-dashboard/admin-dashboard-use-case.module';

@Module({
  imports: [
    AdminFeatUseCaseModule,
    AdminUserUseCaseModule,
    AdminTeamUseCaseModule,
    AdminTeamMemberUseCaseModule,
    AdminDashboardUseCaseModule,
  ],
  exports: [
    AdminFeatUseCaseModule,
    AdminUserUseCaseModule,
    AdminTeamUseCaseModule,
    AdminTeamMemberUseCaseModule,
    AdminDashboardUseCaseModule,
  ],
})
export class AdminUseCaseModule {}
