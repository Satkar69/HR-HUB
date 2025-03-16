import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { UserReviewQuestionnaireFactoryUseCaseService } from './user-review-questionnaire-factory-use-case.service';
import { UserReviewQuestionnaireUseCaseService } from './user-review-questionnaire-use-case.service';
import { ReviewUseCaseModule } from 'src/use-cases/review-use-cases/review-use-case.module';

@Module({
  imports: [DataServicesModule, ReviewUseCaseModule],
  providers: [
    UserReviewQuestionnaireFactoryUseCaseService,
    UserReviewQuestionnaireUseCaseService,
  ],
  exports: [
    UserReviewQuestionnaireFactoryUseCaseService,
    UserReviewQuestionnaireUseCaseService,
  ],
})
export class UserReviewQuestionnaireUseCaseModule {}
