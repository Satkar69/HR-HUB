import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { UpdateQuestionnairesDto } from 'src/core/dtos/request/questionnaire.dto';
import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { UserReviewUseCaseService } from 'src/use-cases/user-use-cases/user-review/user-review-use-case.service';
export declare class UserReviewController {
    private readonly userReviewUseCaseService;
    constructor(userReviewUseCaseService: UserReviewUseCaseService);
    getMySelfReviews(query: IPaginationQuery): Promise<import("../../../../common/interface/response/app-pagination").AppPagination<any>>;
    getMyManagerReviews(query: IPaginationQuery): Promise<import("../../../../common/interface/response/app-pagination").AppPagination<any>>;
    getMyPeerReviews(query: IPaginationQuery): Promise<import("../../../../common/interface/response/app-pagination").AppPagination<any>>;
    createSelfReview(reviewDto: ReviewDto): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/review.model").ReviewModel>>;
    submitReview(reviewId: number, updateQuestionnairesDto: UpdateQuestionnairesDto): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/review.model").ReviewModel>>;
    getMyTeamMembersSelfReviews(): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/review.model").ReviewModel[]>>;
    getMyTeamMembersManagerReviews(): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/review.model").ReviewModel[]>>;
    getMyTeamMembersPeerReviews(): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/review.model").ReviewModel[]>>;
    createManagerReview(reviewDto: ReviewDto): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/review.model").ReviewModel>>;
    markAsComplete(reviewId: number): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/review.model").ReviewModel>>;
}
