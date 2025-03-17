import { Module } from '@nestjs/common';
import { UserAuthUseCaseModule } from './user-auth/user-auth-use-case.module';
import { UserTeamUseCaseModule } from './user-team/user-team-use-case.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ClsModule } from 'nestjs-cls';
import { UserTeamMemberUseCaseModule } from './user-team/user-team-member/user-team-member-use-case.module';
import { UserUseCaseService } from './user-use-case-service';
import { UserReviewUseCaseModule } from './user-review/user-review-use-case.module';
import { UserReviewQuestionnaireUseCaseModule } from './user-review/user-review-questionnaire/user-review-questionnaire-use-case.module';
import { UserPeerNominationUseCaseModule } from './user-peer-nomination/user-peer-nomination-use-case.module';

@Module({
  imports: [
    ClsModule,
    DataServicesModule,
    UserAuthUseCaseModule,
    UserTeamUseCaseModule,
    UserTeamMemberUseCaseModule,
    UserReviewUseCaseModule,
    UserReviewQuestionnaireUseCaseModule,
    UserPeerNominationUseCaseModule,
  ],
  providers: [UserUseCaseService],
  exports: [
    UserUseCaseService,
    UserAuthUseCaseModule,
    UserTeamUseCaseModule,
    UserTeamMemberUseCaseModule,
    UserReviewUseCaseModule,
    UserReviewQuestionnaireUseCaseModule,
    UserPeerNominationUseCaseModule,
  ],
})
export class UserUseCaseModule {}
