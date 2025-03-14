import { Module } from '@nestjs/common';
import { QuestionnaireFactoryUseCaseService } from './questionnaire-factory-use-case.service';

@Module({
  providers: [QuestionnaireFactoryUseCaseService],
  exports: [QuestionnaireFactoryUseCaseService],
})
export class QuestionnaireUseCaseModule {}
