import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ReviewEntity } from './review.entity';

@Entity('review_summaries')
export class ReviewSummaryEntity extends BaseEntity {
  @OneToOne(() => ReviewEntity)
  @JoinColumn({ name: 'self_review_id' })
  selfReview: ReviewEntity;

  @OneToOne(() => ReviewEntity)
  @JoinColumn({ name: 'manager_review_id' })
  managerReview: ReviewEntity;

  @Column({
    name: 'summary_questionnaire',
    type: 'jsonb',
    array: true,
    default: [],
  })
  summaryQuestionnaire: {
    question: string;
    managerFeedback: { answer: string[]; rating: number };
    revieweeFeedback: { answer: string[]; rating: number };
  }[];

  @Column({ name: 'average_performance_rating', nullable: false, default: 0 })
  averagePerformanceRating: number;

  @Column({ name: 'is_acknowledged', nullable: false, default: false })
  isAcknowledged: boolean;
}
