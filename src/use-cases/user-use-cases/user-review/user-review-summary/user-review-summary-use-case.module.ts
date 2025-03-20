import { Module } from '@nestjs/common';
import { UserReviewSummaryFactoryUseCaseService } from './user-review-summary-factory-use-case.service';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { UserReviewSummaryUseCaseService } from './user-review-summary-use-case.service';

@Module({
  imports: [ClsServiceModule, DataServicesModule],
  providers: [
    UserReviewSummaryFactoryUseCaseService,
    UserReviewSummaryUseCaseService,
  ],
  exports: [
    UserReviewSummaryFactoryUseCaseService,
    UserReviewSummaryUseCaseService,
  ],
})
export class UserReviewSummaryUseCaseModule {}
