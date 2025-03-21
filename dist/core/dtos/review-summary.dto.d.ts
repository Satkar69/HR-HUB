export declare class CreateReviewSummaryDto {
    reviewee: number;
    selfReview: number;
    managerReview: number;
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
export declare class UpdateReviewSummaryAcknowledgementDto {
    isAcknowledged: boolean;
}
