import { Injectable } from '@nestjs/common';
import { ReviewModel } from 'src/core/models/review.model';
import { ReviewSummaryModel } from 'src/core/models/review-summary.model';
import {
  CreateReviewSummaryDto,
  UpdateReviewSummaryAcknowledgementDto,
} from 'src/core/dtos/review-summary.dto';
import { UserModel } from 'src/core/models/user.model';

@Injectable()
export class UserReviewSummaryFactoryUseCaseService {
  createReviewSummary(createReviewSummaryDto: CreateReviewSummaryDto) {
    const reviewSummary = new ReviewSummaryModel();
    if (createReviewSummaryDto.reviewee) {
      const userModel = new UserModel();
      userModel.id = createReviewSummaryDto.reviewee;
      reviewSummary.reviewee = userModel;
    }
    if (createReviewSummaryDto.selfReview) {
      const reviewModel = new ReviewModel();
      reviewModel.id = createReviewSummaryDto.selfReview;
      reviewSummary.selfReview = reviewModel;
    }
    if (createReviewSummaryDto.managerReview) {
      const reviewModel = new ReviewModel();
      reviewModel.id = createReviewSummaryDto.managerReview;
      reviewSummary.managerReview = reviewModel;
    }
    if (createReviewSummaryDto.summaryQuestionnaire)
      reviewSummary.summaryQuestionnaire =
        createReviewSummaryDto.summaryQuestionnaire;

    if (createReviewSummaryDto.averagePerformanceRating)
      reviewSummary.averagePerformanceRating =
        createReviewSummaryDto.averagePerformanceRating;

    if (createReviewSummaryDto.isAcknowledged)
      reviewSummary.isAcknowledged = createReviewSummaryDto.isAcknowledged;

    return reviewSummary;
  }

  updateReviewSummaryAcknowledgement(
    updateReviewSummaryAcknowledgementDto: UpdateReviewSummaryAcknowledgementDto,
  ) {
    const reviewSummary = new ReviewSummaryModel();
    if (updateReviewSummaryAcknowledgementDto.isAcknowledged)
      reviewSummary.isAcknowledged =
        updateReviewSummaryAcknowledgementDto.isAcknowledged;
    return reviewSummary;
  }
}
