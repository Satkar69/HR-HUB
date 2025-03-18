import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ReviewEntity } from './review.entity';
import { UserEntity } from './user.entity';

@Entity('review_summaries')
export class ReviewSummaryEntity extends BaseEntity {}
