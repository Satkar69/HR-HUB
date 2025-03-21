import { IDataServices } from 'src/core/abstracts';
export declare class ReviewSummaryUseCaseService {
    private dataServices;
    constructor(dataServices: IDataServices);
    getReveiwSummaryById(reviewSummaryId: number): Promise<import("../../core/models/review-summary.model").ReviewSummaryModel>;
}
