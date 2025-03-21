import { Module } from '@nestjs/common';
import { ReviewSummaryUseCaseModule } from 'src/use-cases/review-summary-use-cases/review-summary-use-case.module';
import { ReviewSummaryController } from './review-summary.controller';

@Module({
  imports: [ReviewSummaryUseCaseModule],
  controllers: [ReviewSummaryController],
})
export class ReviewSummaryControllerModule {}
