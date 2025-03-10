import { Module } from '@nestjs/common';
import { AdminFeatUseCaseModule } from './admin/admin-feat-use-case.module';
import { AdminUserUseCaseModule } from './admin-user/admin-user-use-case.module';
import { AdminTeamUseCaseModule } from './admin-team/admin-team-use-case.module';
@Module({
  imports: [
    AdminFeatUseCaseModule,
    AdminUserUseCaseModule,
    AdminTeamUseCaseModule,
  ],
  exports: [
    AdminFeatUseCaseModule,
    AdminUserUseCaseModule,
    AdminTeamUseCaseModule,
  ],
})
export class AdminUseCaseModule {}
