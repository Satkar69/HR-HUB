import { BaseEntity } from './base.entity';
import { ReviewEntity } from './review.entity';
export declare class QuestionnaireEntity extends BaseEntity {
    review: ReviewEntity;
    question: string;
    answers: string[];
    ratings: number;
}
