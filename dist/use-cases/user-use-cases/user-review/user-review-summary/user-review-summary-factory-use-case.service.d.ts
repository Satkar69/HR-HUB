import { ReviewSummaryModel } from 'src/core/models/review-summary.model';
import { CreateReviewSummaryDto, UpdateReviewSummaryAcknowledgementDto } from 'src/core/dtos/review-summary.dto';
export declare class UserReviewSummaryFactoryUseCaseService {
    createReviewSummary(createReviewSummaryDto: CreateReviewSummaryDto): ReviewSummaryModel;
    updateReviewSummaryAcknowledgement(updateReviewSummaryAcknowledgementDto: UpdateReviewSummaryAcknowledgementDto): ReviewSummaryModel;
}
