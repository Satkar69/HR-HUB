import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { QuestionTypeEnum } from 'src/common/enums/question-type.enum';

@Entity('questions')
export class QuestionEntity extends BaseEntity {
  @Column({ name: 'question_type' })
  questionType: QuestionTypeEnum;

  @Column('jsonb', { name: 'question', nullable: false, default: [] })
  question: { questionId: number; questionText: string }[];
}
