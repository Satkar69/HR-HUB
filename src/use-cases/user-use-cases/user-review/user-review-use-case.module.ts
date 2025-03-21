import { Module } from '@nestjs/common';
import { UserReviewUseCaseService } from './user-review-use-case.service';
import { ReviewUseCaseModule } from 'src/use-cases/review-use-cases/review-use-case.module';
import { QuestionnaireUseCaseModule } from 'src/use-cases/questioninaire-use-cases/questionnaire-use-case.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';
import { UserReviewQuestionnaireUseCaseModule } from './user-review-questionnaire/user-review-questionnaire-use-case.module';
import { UserReviewSummaryUseCaseModule } from './user-review-summary/user-review-summary-use-case.module';

@Module({
  imports: [
    ClsServiceModule,
    DataServicesModule,
    ReviewUseCaseModule,
    QuestionnaireUseCaseModule,
    UserReviewQuestionnaireUseCaseModule,
    UserReviewSummaryUseCaseModule,
  ],
  providers: [UserReviewUseCaseService],
  exports: [UserReviewUseCaseService],
})
export class UserReviewUseCaseModule {}
