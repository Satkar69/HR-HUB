import { ReviewModel } from './review.model';

export class QuestionnaireModel {
  id: number;
  review: ReviewModel;
  question: string;
  answers: string[];
  ratings: number;
}
