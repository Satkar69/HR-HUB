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
exports.NotificationEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let NotificationEntity = class NotificationEntity extends base_entity_1.BaseEntity {
};
exports.NotificationEntity = NotificationEntity;
__decorate([
    (0, typeorm_1.Column)({
        name: 'title',
        nullable: false,
    }),
    __metadata("design:type", String)
], NotificationEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'body',
        nullable: false,
    }),
    __metadata("design:type", String)
], NotificationEntity.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'type',
        nullable: true,
    }),
    __metadata("design:type", String)
], NotificationEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_global',
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], NotificationEntity.prototype, "isGlobal", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-json',
        name: 'data',
        nullable: true,
    }),
    __metadata("design:type", Object)
], NotificationEntity.prototype, "data", void 0);
exports.NotificationEntity = NotificationEntity = __decorate([
    (0, typeorm_1.Entity)('notifications')
], NotificationEntity);
//# sourceMappingURL=nottification.entity.js.map