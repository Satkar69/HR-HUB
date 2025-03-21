import { ReviewUseCaseService } from 'src/use-cases/review-use-cases/review-use-case.service';
export declare class ReviewController {
    private reviewUseCaseService;
    constructor(reviewUseCaseService: ReviewUseCaseService);
    getReviewById(reviewId: number): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../core/models/review.model").ReviewModel>>;
}
