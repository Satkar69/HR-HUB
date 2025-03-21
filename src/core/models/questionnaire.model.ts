import { ReviewModel } from './review.model';

export class QuestionnaireModel {
  id: number;
  review: ReviewModel;
  questionId: number;
  question: string;
  answers: string[];
  ratings: number;
}
