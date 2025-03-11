import { Injectable } from '@nestjs/common';
import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { ReviewModel } from 'src/core/models/review.model';
import { UserModel } from 'src/core/models/user.model';

@Injectable()
export class ReviewFactoryUseCaseService {
  createReview(reviewDto: ReviewDto) {
    const review = new ReviewModel();
    if (reviewDto.reviewType) review.reviewType = reviewDto.reviewType;
    if (reviewDto.reviewer) {
      const userModel = new UserModel();
      userModel.id = reviewDto.reviewer;
      review.reviewer = userModel;
    }
    if (reviewDto.reviewee) {
      const userModel = new UserModel();
      userModel.id = reviewDto.reviewee;
      review.reviewee = userModel;
    }
    if (reviewDto.subject) review.subject = reviewDto.subject;
    if (reviewDto.description) review.description = reviewDto.description;
    if (reviewDto.progressStatus)
      review.progressStatus = reviewDto.progressStatus;
    if (reviewDto.dueDate) review.dueDate = reviewDto.dueDate;
    return review;
  }
  updateReviewProgessStatus(reviewDto: ReviewDto) {
    const review = new ReviewModel();
    if (reviewDto.progressStatus)
      review.progressStatus = reviewDto.progressStatus;
    return review;
  }
}
