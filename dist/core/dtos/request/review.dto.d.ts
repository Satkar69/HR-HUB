import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';
import { ReviewTypeEnum } from 'src/common/enums/review-type.enum';
export declare class ReviewDto {
    reviewType: ReviewTypeEnum;
    reviewer: number;
    reviewee: number;
    subject: string;
    description: string;
    progressStatus: ReviewProgressStatusEnum;
    dueDate: Date;
}
