import { Module } from '@nestjs/common';
import { ReviewFactoryUseCaseService } from './review-factory-use-case.service';

@Module({
  providers: [ReviewFactoryUseCaseService],
  exports: [ReviewFactoryUseCaseService],
})
export class ReviewUseCaseModule {}
