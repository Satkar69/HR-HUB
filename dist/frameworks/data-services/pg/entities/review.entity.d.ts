import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { ReviewTypeEnum } from 'src/common/enums/review-type.enum';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';
import { QuestionnaireEntity } from './questionnaire.entity';
export declare class ReviewEntity extends BaseEntity {
    reviewType: ReviewTypeEnum;
    reviewer: UserEntity;
    reviewee: UserEntity;
    subject: string;
    description: string;
    progressStatus: ReviewProgressStatusEnum;
    questionnaires: QuestionnaireEntity[];
    dueDate: Date;
}
