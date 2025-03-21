import { IDataServices } from 'src/core/abstracts';
export declare class ReviewUseCaseService {
    private dataServices;
    constructor(dataServices: IDataServices);
    getReviewById(reviewId: number): Promise<import("../../core/models/review.model").ReviewModel>;
}
