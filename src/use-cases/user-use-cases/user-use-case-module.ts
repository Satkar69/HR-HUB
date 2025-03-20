import { Module } from '@nestjs/common';
import { UserAuthUseCaseModule } from './user-auth/user-auth-use-case.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';
import { UserUseCaseService } from './user-use-case-service';
import { UserReviewUseCaseModule } from './user-review/user-review-use-case.module';
import { UserReviewQuestionnaireUseCaseModule } from './user-review/user-review-questionnaire/user-review-questionnaire-use-case.module';
import { UserPeerNominationUseCaseModule } from './user-peer-nomination/user-peer-nomination-use-case.module';
import { UserTeamMemberUseCaseService } from './user-team/user-team-member/user-team-member-use-case.service';
import { UserTeamUseCaseService } from './user-team/user-team-use-case.service';
import { UserNotificationUseCaseService } from './user-notification/user-notification-use-case.service';
import { UserReviewSummaryUseCaseModule } from './user-review/user-review-summary/user-review-summary-use-case.module';

@Module({
  imports: [
    ClsServiceModule,
    DataServicesModule,
    UserAuthUseCaseModule,
    UserReviewUseCaseModule,
    UserReviewQuestionnaireUseCaseModule,
    UserPeerNominationUseCaseModule,
    UserReviewSummaryUseCaseModule,
  ],
  providers: [
    UserUseCaseService,
    UserTeamUseCaseService,
    UserTeamMemberUseCaseService,
    UserNotificationUseCaseService,
  ],
  exports: [
    UserUseCaseService,
    UserAuthUseCaseModule,
    UserReviewUseCaseModule,
    UserReviewQuestionnaireUseCaseModule,
    UserPeerNominationUseCaseModule,
    UserReviewSummaryUseCaseModule,
    UserTeamUseCaseService,
    UserTeamMemberUseCaseService,
    UserNotificationUseCaseService,
  ],
})
export class UserUseCaseModule {}
