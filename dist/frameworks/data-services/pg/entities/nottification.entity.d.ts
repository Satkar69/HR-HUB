import { BaseEntity } from './base.entity';
export declare class NotificationEntity extends BaseEntity {
    title: string;
    body: string;
    type: string;
    isGlobal: boolean;
    data: object;
}
