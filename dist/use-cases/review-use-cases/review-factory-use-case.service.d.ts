import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { ReviewModel } from 'src/core/models/review.model';
export declare class ReviewFactoryUseCaseService {
    createReview(reviewDto: ReviewDto): ReviewModel;
    updateReviewProgessStatus(reviewDto: ReviewDto): ReviewModel;
}
