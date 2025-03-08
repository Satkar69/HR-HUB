import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { ReviewTypeEnum } from 'src/common/enums/review-type.enum';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';

@Entity('reviews')
export class ReviewEntity extends BaseEntity {
  @Column({ name: 'review_type' })
  reviewType: ReviewTypeEnum;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'reviewer_id' })
  reviewer: UserEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'reviewee_id' })
  reviewee: UserEntity;

  @Column({ name: 'subject' })
  subject: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'progress_status' })
  progressStatus: ReviewProgressStatusEnum;

  @Column({ name: 'due_date' })
  dueDate: Date;
}
