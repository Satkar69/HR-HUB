import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { QuestionnaireTypeEnum } from 'src/common/enums/questionnaire-type.enum';
import { ReviewEntity } from './review.entity';

@Entity('questionnaires')
export class QuestionnaireEntity extends BaseEntity {
  @ManyToOne(() => ReviewEntity)
  @JoinColumn({ name: 'review_id' })
  review: ReviewEntity;

  @Column({ name: 'type' })
  type: QuestionnaireTypeEnum;

  @Column('jsonb', { name: 'question', nullable: false, default: [] })
  questions: { id: string; text: string }[];

  @Column('jsonb', { name: 'answer', nullable: false, default: [] })
  answer: { id: string; text: string }[];

  @Column('jsonb', { name: 'ratings', nullable: false, default: [] })
  ratings: { id: string; rating: number }[];
}
