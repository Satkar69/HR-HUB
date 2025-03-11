import { Injectable } from '@nestjs/common';
import { createQuestionnaireDto } from 'src/core/dtos/request/questionnaire.dto';
import { QuestionnaireModel } from 'src/core/models/questionnaire.model';
import { ReviewModel } from 'src/core/models/review.model';

@Injectable()
export class QuestionnaireFactoryUseCaseService {
  createQuestionnaire(createQuestionnaireDto: createQuestionnaireDto) {
    const questionnaire = new QuestionnaireModel();
    if (createQuestionnaireDto.review) {
      const reviewModel = new ReviewModel();
      reviewModel.id = createQuestionnaireDto.review;
      questionnaire.review = reviewModel;
    }
    if (createQuestionnaireDto.question)
      questionnaire.question = createQuestionnaireDto.question;
    if (createQuestionnaireDto.answer)
      questionnaire.answer = createQuestionnaireDto.answer;
    if (createQuestionnaireDto.ratings)
      questionnaire.ratings = createQuestionnaireDto.ratings;
    return questionnaire;
  }
}
