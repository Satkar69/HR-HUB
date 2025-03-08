import { ReviewTypeEnum } from 'src/common/enums/review-type.enum';
import { UserModel } from './user.model';

export class ReviewModel {
  id: number;
  reviewType: ReviewTypeEnum;
  reviewer: UserModel;
  reviewee: UserModel;
  subject: string;
  description: string;
  dueDate: Date;
}
