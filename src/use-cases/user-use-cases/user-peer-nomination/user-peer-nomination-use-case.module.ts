import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { UserPeerNominationFactoryUseCaseService } from './user-peer-nomination-factory-use-case.service';
import { UserPeerNominationUseCaseService } from './user-peer-nomination-use-case.service';
import { ReviewUseCaseModule } from 'src/use-cases/review-use-cases/review-use-case.module';
import { QuestionnaireUseCaseModule } from 'src/use-cases/questioninaire-use-cases/questionnaire-use-case.module';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';

@Module({
  imports: [
    DataServicesModule,
    ClsServiceModule,
    ReviewUseCaseModule,
    QuestionnaireUseCaseModule,
  ],
  providers: [
    UserPeerNominationFactoryUseCaseService,
    UserPeerNominationUseCaseService,
  ],
  exports: [
    UserPeerNominationFactoryUseCaseService,
    UserPeerNominationUseCaseService,
  ],
})
export class UserPeerNominationUseCaseModule {}
