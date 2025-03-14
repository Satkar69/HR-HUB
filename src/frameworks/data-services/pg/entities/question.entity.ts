import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { QuestionTypeEnum } from 'src/common/enums/question-type.enum';

@Entity('questions')
export class QuestionEntity extends BaseEntity {
  @Column({ name: 'question_type' })
  questionType: QuestionTypeEnum;

  @Column({ name: 'question_id', nullable: false })
  questionId: number;

  @Column({ name: 'question_text', nullable: false })
  questionText: string;
}
