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
exports.NotificationTokenEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
const admin_entity_1 = require("./admin.entity");
let NotificationTokenEntity = class NotificationTokenEntity extends base_entity_1.BaseEntity {
};
exports.NotificationTokenEntity = NotificationTokenEntity;
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], NotificationTokenEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => admin_entity_1.AdminEntity),
    (0, typeorm_1.JoinColumn)({ name: 'admin_id' }),
    __metadata("design:type", admin_entity_1.AdminEntity)
], NotificationTokenEntity.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'device_id',
        nullable: false,
    }),
    __metadata("design:type", String)
], NotificationTokenEntity.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fcm_token',
        nullable: false,
    }),
    __metadata("design:type", String)
], NotificationTokenEntity.prototype, "fcmToken", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'decive_type',
        nullable: false,
    }),
    __metadata("design:type", String)
], NotificationTokenEntity.prototype, "deviceType", void 0);
exports.NotificationTokenEntity = NotificationTokenEntity = __decorate([
    (0, typeorm_1.Entity)('notification_tokens')
], NotificationTokenEntity);
//# sourceMappingURL=notification-token.entity.js.map