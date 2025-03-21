import { BaseEntity } from './base.entity';
import { QuestionTypeEnum } from 'src/common/enums/question-type.enum';
export declare class QuestionEntity extends BaseEntity {
    questionType: QuestionTypeEnum;
    questionId: number;
    questionText: string;
}
