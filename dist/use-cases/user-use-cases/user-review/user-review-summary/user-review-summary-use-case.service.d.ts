import { IDataServices } from 'src/core/abstracts';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { UserReviewSummaryFactoryUseCaseService } from './user-review-summary-factory-use-case.service';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
export declare class UserReviewSummaryUseCaseService {
    private dataServices;
    private readonly cls;
    private userReviewSummaryAcknodledgeFactoryUseCaseService;
    constructor(dataServices: IDataServices, cls: IClsStore<AppClsStore>, userReviewSummaryAcknodledgeFactoryUseCaseService: UserReviewSummaryFactoryUseCaseService);
    getUserLatestReviewSummary(): Promise<{}>;
    getTeamAcknodlwdgedReviewSummaries(): Promise<IPaginationData>;
    getTeamUnAcknodlwdgedReviewSummaries(): Promise<IPaginationData>;
    acknowdegeReviewSummary(reviewSummaryId: number): Promise<import("../../../../core/models/review-summary.model").ReviewSummaryModel>;
}
