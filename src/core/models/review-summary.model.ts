import { ReviewModel } from './review.model';

export class ReviewSummaryModel {
  selfReview: ReviewModel;
  managerReview: ReviewModel;
  summaryQuestionnaire: {
    question: string;
    managerFeedback: { answer: string[]; rating: number };
    revieweeFeedback: { answer: string[]; rating: number };
  }[];
  averagePerformanceRating: number;
  isAcknowledged: boolean;
}
