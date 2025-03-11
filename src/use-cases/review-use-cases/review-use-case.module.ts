import { Module } from '@nestjs/common';
import { ReviewFactoryUseCaseService } from './review-factory-use-case.service';
import { ReviewUseCaseService } from './review-use-case.service';
import { DataServicesModule } from 'src/services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [ReviewFactoryUseCaseService, ReviewUseCaseService],
  exports: [ReviewFactoryUseCaseService, ReviewUseCaseService],
})
export class ReviewUseCaseModule {}
