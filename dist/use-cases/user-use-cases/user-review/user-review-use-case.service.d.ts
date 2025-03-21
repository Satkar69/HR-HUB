import { IDataServices } from 'src/core/abstracts';
import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { QuestionnaireFactoryUseCaseService } from 'src/use-cases/questioninaire-use-cases/questionnaire-factory-use-case.service';
import { ReviewFactoryUseCaseService } from 'src/use-cases/review-use-cases/review-factory-use-case.service';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { UserReviewQuestionnaireFactoryUseCaseService } from './user-review-questionnaire/user-review-questionnaire-factory-use-case.service';
import { UpdateQuestionnairesDto } from 'src/core/dtos/request/questionnaire.dto';
import { UserReviewSummaryFactoryUseCaseService } from './user-review-summary/user-review-summary-factory-use-case.service';
export declare class UserReviewUseCaseService {
    private dataServices;
    private reviewFactoryUseCaseService;
    private questionnaireFactroyUseCaseService;
    private userReviewQuestionnaireFactoryUseCaseService;
    private userReviewSummaryFactoryUseCaseService;
    private readonly cls;
    constructor(dataServices: IDataServices, reviewFactoryUseCaseService: ReviewFactoryUseCaseService, questionnaireFactroyUseCaseService: QuestionnaireFactoryUseCaseService, userReviewQuestionnaireFactoryUseCaseService: UserReviewQuestionnaireFactoryUseCaseService, userReviewSummaryFactoryUseCaseService: UserReviewSummaryFactoryUseCaseService, cls: IClsStore<AppClsStore>);
    getMySelfReviews(): Promise<IPaginationData>;
    getMyManagerReviews(): Promise<IPaginationData>;
    getMyPeerReviewsAsNominee(): Promise<IPaginationData>;
    getMyTeamSelfReviews(): Promise<import("../../../core/models/review.model").ReviewModel[]>;
    getMyTeamManagerReviews(): Promise<import("../../../core/models/review.model").ReviewModel[]>;
    getMyTeamPeerReviews(): Promise<import("../../../core/models/review.model").ReviewModel[]>;
    createSelfReview(reviewDto: ReviewDto): Promise<import("../../../core/models/review.model").ReviewModel>;
    createManagerReview(reviewDto: ReviewDto): Promise<import("../../../core/models/review.model").ReviewModel>;
    markReviewAsCompleted(reviewId: number): Promise<import("../../../core/models/review.model").ReviewModel>;
    submitReviewById(reviewId: number, updateQuestionnairesDto: UpdateQuestionnairesDto): Promise<import("../../../core/models/review.model").ReviewModel>;
}
