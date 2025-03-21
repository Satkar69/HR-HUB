import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ReviewEntity } from './review.entity';
import { UserEntity } from './user.entity';

@Entity('review_summaries')
export class ReviewSummaryEntity extends BaseEntity {
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  reviewee: UserEntity;

  @OneToOne(() => ReviewEntity)
  @JoinColumn({ name: 'self_review_id' })
  selfReview: ReviewEntity;

  @OneToOne(() => ReviewEntity)
  @JoinColumn({ name: 'manager_review_id' })
  managerReview: ReviewEntity;

  @Column({
    name: 'summary_questionnaire',
    type: 'jsonb',
    default: [],
  })
  summaryQuestionnaire: {
    question: string;
    managerFeedback: { answers: string[]; ratings: number };
    revieweeFeedback: { answers: string[]; ratings: number };
  }[];

  @Column({
    name: 'average_performance_rating',
    type: 'decimal',
    precision: 3,
    scale: 2,
    nullable: false,
    default: 0,
  })
  averagePerformanceRating: number;

  @Column({ name: 'is_acknowledged', nullable: false, default: false })
  isAcknowledged: boolean;
}
