import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ReviewSummaryUseCaseService } from './review-summary-use-case.service';

@Module({
  imports: [DataServicesModule],
  providers: [ReviewSummaryUseCaseService],
  exports: [ReviewSummaryUseCaseService],
})
export class ReviewSummaryUseCaseModule {}
