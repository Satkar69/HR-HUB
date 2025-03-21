import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { NotificationEntity } from './nottification.entity';
import { UserEntity } from './user.entity';
import { AdminEntity } from './admin.entity';

@Entity('user_notifications')
export class UserNotificationEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, {
    cascade: ['insert', 'remove', 'soft-remove'],
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => AdminEntity, {
    cascade: ['insert', 'remove', 'soft-remove'],
  })
  @JoinColumn({ name: 'admin_id' })
  admin: AdminEntity;

  @ManyToOne(() => NotificationEntity, { eager: true })
  @JoinColumn({ name: 'notification_id' })
  notification: NotificationEntity;

  @Column({
    name: 'is_read',
    nullable: false,
    default: false,
  })
  isRead: boolean;

  @Column({
    name: 'read_at',
    nullable: true,
  })
  readAt: Date;
}
