import { Module } from '@nestjs/common';
import { AdminUseCaseModule } from 'src/use-cases/admin-use-cases/admin-use-case.module';
import { AdminController } from './admin.controller';
import { AdminUserController } from './admin-user/admin-user.controller';
import { AdminTeamController } from './admin-team/admin-team.controller';

@Module({
  imports: [AdminUseCaseModule],
  controllers: [AdminController, AdminUserController, AdminTeamController],
})
export class AdminControllerModule {}
