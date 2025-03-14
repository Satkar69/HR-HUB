import { Module } from '@nestjs/common';
import { ReviewController } from './review-controller';
import { ReviewUseCaseModule } from 'src/use-cases/review-use-cases/review-use-case.module';

@Module({
  imports: [ReviewUseCaseModule],
  controllers: [ReviewController],
})
export class ReviewControllerModule {}
