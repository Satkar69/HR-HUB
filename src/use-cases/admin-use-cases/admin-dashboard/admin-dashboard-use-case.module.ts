import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { adminDashboardUseCaseService } from './admin-dashboard-use-case.service';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';

@Module({
  imports: [DataServicesModule, ClsServiceModule],
  providers: [adminDashboardUseCaseService],
  exports: [adminDashboardUseCaseService],
})
export class AdminDashboardUseCaseModule {}
