import { ReviewModel } from './review.model';

export class QuestionnaireModel {
  id: number;
  review: ReviewModel;
  question: string;
  answer: string;
  ratings: number;
}
