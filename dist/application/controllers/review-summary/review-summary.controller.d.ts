import { ReviewSummaryUseCaseService } from 'src/use-cases/review-summary-use-cases/review-summary-use-case.service';
export declare class ReviewSummaryController {
    private reviewSummaryUseCaseService;
    constructor(reviewSummaryUseCaseService: ReviewSummaryUseCaseService);
    getReviewSummary(reviewSummaryId: number): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../core/models/review-summary.model").ReviewSummaryModel>>;
}
