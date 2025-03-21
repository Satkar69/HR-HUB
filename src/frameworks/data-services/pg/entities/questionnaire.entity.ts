import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ReviewEntity } from './review.entity';

@Entity('questionnaires')
export class QuestionnaireEntity extends BaseEntity {
  @ManyToOne(() => ReviewEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'review_id' })
  review: ReviewEntity;

  @Column({ name: 'question', nullable: false })
  question: string;

  @Column({ name: 'question_id', nullable: false })
  questionId: number;

  @Column({
    name: 'answers',
    type: 'text',
    nullable: true,
    array: true,
    default: [],
  })
  answers: string[];

  @Column({ name: 'ratings', nullable: true, default: 0 })
  ratings: number;
}
