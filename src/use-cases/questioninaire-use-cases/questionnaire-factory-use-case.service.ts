import { Injectable } from '@nestjs/common';
import { CreateQuestionnaireDto } from 'src/core/dtos/request/questionnaire.dto';
import { QuestionnaireModel } from 'src/core/models/questionnaire.model';
import { ReviewModel } from 'src/core/models/review.model';

@Injectable()
export class QuestionnaireFactoryUseCaseService {
  createQuestionnaire(createQuestionnaireDto: CreateQuestionnaireDto) {
    const questionnaire = new QuestionnaireModel();
    if (createQuestionnaireDto.review) {
      const reviewModel = new ReviewModel();
      reviewModel.id = createQuestionnaireDto.review;
      questionnaire.review = reviewModel;
    }
    if (createQuestionnaireDto.questionId)
      questionnaire.questionId = createQuestionnaireDto.questionId;
    if (createQuestionnaireDto.question)
      questionnaire.question = createQuestionnaireDto.question;
    if (createQuestionnaireDto.answers)
      questionnaire.answers = createQuestionnaireDto.answers;
    if (createQuestionnaireDto.ratings)
      questionnaire.ratings = createQuestionnaireDto.ratings;
    return questionnaire;
  }
}
