import { ReviewModel } from './review.model';
export declare class QuestionnaireModel {
    id: number;
    review: ReviewModel;
    question: string;
    answers: string[];
    ratings: number;
}
