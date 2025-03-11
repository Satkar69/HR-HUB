import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ReviewEntity } from './review.entity';

@Entity('questionnaires')
export class QuestionnaireEntity extends BaseEntity {
  @ManyToOne(() => ReviewEntity)
  @JoinColumn({ name: 'review_id' })
  review: ReviewEntity;

  @Column({ name: 'question', nullable: false })
  question: string;

  @Column({ name: 'answers', nullable: false, array: true })
  answer: string;

  @Column({ name: 'ratings', nullable: false })
  ratings: number;
}
