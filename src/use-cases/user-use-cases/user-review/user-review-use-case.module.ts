import { Module } from '@nestjs/common';
import { UserReviewUseCaseService } from './user-review-use-case.service';
import { ReviewUseCaseModule } from 'src/use-cases/review-use-cases/review-use-case.module';
import { QuestionnaireUseCaseModule } from 'src/use-cases/questioninaire-use-cases/questionnaire-use-case.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';
import { UserReviewQuestionnaireUseCaseModule } from './user-review-questionnaire/user-review-questionnaire-use-case.module';

@Module({
  imports: [
    ReviewUseCaseModule,
    QuestionnaireUseCaseModule,
    UserReviewQuestionnaireUseCaseModule,
    DataServicesModule,
    ClsServiceModule,
  ],
  providers: [UserReviewUseCaseService],
  exports: [UserReviewUseCaseService],
})
export class UserReviewUseCaseModule {}
