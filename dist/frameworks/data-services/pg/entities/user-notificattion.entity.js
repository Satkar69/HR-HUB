"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotificationEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const nottification_entity_1 = require("./nottification.entity");
const user_entity_1 = require("./user.entity");
const admin_entity_1 = require("./admin.entity");
let UserNotificationEntity = class UserNotificationEntity extends base_entity_1.BaseEntity {
};
exports.UserNotificationEntity = UserNotificationEntity;
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, {
        cascade: ['insert', 'remove', 'soft-remove'],
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserNotificationEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => admin_entity_1.AdminEntity, {
        cascade: ['insert', 'remove', 'soft-remove'],
    }),
    (0, typeorm_1.JoinColumn)({ name: 'admin_id' }),
    __metadata("design:type", admin_entity_1.AdminEntity)
], UserNotificationEntity.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => nottification_entity_1.NotificationEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'notification_id' }),
    __metadata("design:type", nottification_entity_1.NotificationEntity)
], UserNotificationEntity.prototype, "notification", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_read',
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], UserNotificationEntity.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'read_at',
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserNotificationEntity.prototype, "readAt", void 0);
exports.UserNotificationEntity = UserNotificationEntity = __decorate([
    (0, typeorm_1.Entity)('user_notifications')
], UserNotificationEntity);
//# sourceMappingURL=user-notificattion.entity.js.map