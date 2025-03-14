import { Injectable } from '@nestjs/common';
import { UpdateQuestionnaireDto } from 'src/core/dtos/request/questionnaire.dto';
import { QuestionnaireModel } from 'src/core/models/questionnaire.model';

@Injectable()
export class UserReviewQuestionnaireFactoryUseCaseService {
  updateQuestionnaire(updateQuestionnaireDto: UpdateQuestionnaireDto) {
    const questionnaire = new QuestionnaireModel();
    if (updateQuestionnaireDto.answers)
      questionnaire.answers = updateQuestionnaireDto.answers;
    if (updateQuestionnaireDto.ratings)
      questionnaire.ratings = updateQuestionnaireDto.ratings;
    return questionnaire;
  }
}
