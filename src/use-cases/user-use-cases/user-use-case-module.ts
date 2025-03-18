import { Module } from '@nestjs/common';
import { UserAuthUseCaseModule } from './user-auth/user-auth-use-case.module';
// import { UserTeamUseCaseModule } from './user-team/user-team-use-case.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';
// import { UserTeamMemberUseCaseModule } from './user-team/user-team-member/user-team-member-use-case.module';
import { UserUseCaseService } from './user-use-case-service';
import { UserReviewUseCaseModule } from './user-review/user-review-use-case.module';
import { UserReviewQuestionnaireUseCaseModule } from './user-review/user-review-questionnaire/user-review-questionnaire-use-case.module';
import { UserPeerNominationUseCaseModule } from './user-peer-nomination/user-peer-nomination-use-case.module';
import { UserTeamMemberUseCaseService } from './user-team/user-team-member/user-team-member-use-case.service';
import { UserTeamUseCaseService } from './user-team/user-team-use-case.service';

@Module({
  imports: [
    ClsServiceModule,
    DataServicesModule,
    UserAuthUseCaseModule,
    // UserTeamUseCaseModule,
    // UserTeamMemberUseCaseModule,
    UserReviewUseCaseModule,
    UserReviewQuestionnaireUseCaseModule,
    UserPeerNominationUseCaseModule,
  ],
  providers: [
    UserUseCaseService,
    UserTeamUseCaseService,
    UserTeamMemberUseCaseService,
  ],
  exports: [
    UserUseCaseService,
    UserAuthUseCaseModule,
    // UserTeamUseCaseModule,
    // UserTeamMemberUseCaseModule,
    UserReviewUseCaseModule,
    UserReviewQuestionnaireUseCaseModule,
    UserPeerNominationUseCaseModule,
    UserTeamUseCaseService,
    UserTeamMemberUseCaseService,
  ],
})
export class UserUseCaseModule {}
