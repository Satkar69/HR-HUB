import { ReviewTypeEnum } from 'src/common/enums/review-type.enum';
import { UserModel } from './user.model';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';
import { QuestionnaireModel } from './questionnaire.model';

export class ReviewModel {
  id: number;
  reviewType: ReviewTypeEnum;
  reviewer: UserModel;
  reviewee: UserModel;
  subject: string;
  description: string;
  progressStatus: ReviewProgressStatusEnum;
  dueDate: Date;
}
