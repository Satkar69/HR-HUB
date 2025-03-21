import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { UserReviewSummaryUseCaseService } from 'src/use-cases/user-use-cases/user-review/user-review-summary/user-review-summary-use-case.service';
export declare class UserReviewSummaryController {
    private userReviewSummaryUseCaseService;
    constructor(userReviewSummaryUseCaseService: UserReviewSummaryUseCaseService);
    getMyLatestReviewSummary(): Promise<import("../../../../../common/interface/response/app-response").AppResponse<{}>>;
    getTeamAcknodlwdgedReviewSummaries(query: IPaginationQuery): Promise<import("../../../../../common/interface/response/app-pagination").AppPagination<any>>;
    getTeamUnAcknodlwdgedReviewSummaries(query: IPaginationQuery): Promise<import("../../../../../common/interface/response/app-pagination").AppPagination<any>>;
    acknowledgeReviewSummary(reviewSummaryId: number): Promise<import("../../../../../common/interface/response/app-response").AppResponse<import("../../../../../core/models/review-summary.model").ReviewSummaryModel>>;
}
