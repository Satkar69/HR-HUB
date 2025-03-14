import { QuestionTypeEnum } from 'src/common/enums/question-type.enum';

export class QuestionModel {
  id: number;
  questionType: QuestionTypeEnum;
  questionId: number;
  questionText: string;
}
