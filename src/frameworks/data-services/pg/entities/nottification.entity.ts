import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('notifications')
export class NotificationEntity extends BaseEntity {
  @Column({
    name: 'title',
    nullable: false,
  })
  title: string;

  @Column({
    name: 'body',
    nullable: false,
  })
  body: string;

  @Column({
    name: 'type',
    nullable: true,
  })
  type: string;

  @Column({
    name: 'is_global',
    nullable: false,
    default: false,
  })
  isGlobal: boolean;

  @Column({
    type: 'simple-json',
    name: 'data',
    nullable: true,
  })
  data: object;
}
