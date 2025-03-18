import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { AdminEntity } from './admin.entity';

@Entity('notification_tokens')
export class NotificationTokenEntity extends BaseEntity {
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => AdminEntity)
  @JoinColumn({ name: 'admin_id' })
  admin: AdminEntity;

  @Column({
    name: 'fcm_token',
    nullable: false,
  })
  fcmToken: string;

  @Column({
    name: 'decive_type',
    nullable: false,
  })
  deviceType: string;
}
