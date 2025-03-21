import { ReviewModel } from './review.model';
import { UserModel } from './user.model';

export class ReviewSummaryModel {
  reviewee: UserModel;
  selfReview: ReviewModel;
  managerReview: ReviewModel;
  summaryQuestionnaire: {
    question: string;
    managerFeedback: { answers: string[]; ratings: number };
    revieweeFeedback: { answers: string[]; ratings: number };
  }[];
  averagePerformanceRating: number;
  isAcknowledged: boolean;
}
