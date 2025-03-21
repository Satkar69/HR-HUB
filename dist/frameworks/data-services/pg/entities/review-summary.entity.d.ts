import { BaseEntity } from './base.entity';
import { ReviewEntity } from './review.entity';
import { UserEntity } from './user.entity';
export declare class ReviewSummaryEntity extends BaseEntity {
    reviewee: UserEntity;
    selfReview: ReviewEntity;
    managerReview: ReviewEntity;
    summaryQuestionnaire: {
        question: string;
        managerFeedback: {
            answers: string[];
            ratings: number;
        };
        revieweeFeedback: {
            answers: string[];
            ratings: number;
        };
    }[];
    averagePerformanceRating: number;
    isAcknowledged: boolean;
}
