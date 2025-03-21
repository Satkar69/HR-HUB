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
exports.AdminEntity = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const base_entity_1 = require("./base.entity");
const admin_role_enum_1 = require("../../../../common/enums/admin-role.enum");
let AdminEntity = class AdminEntity extends base_entity_1.BaseEntity {
    async comparePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
    async hashPassword(password) {
        return await bcrypt.hash(password, 12);
    }
    async hashPasswordBeforeInsert() {
        this.password = await this.hashPassword(this.password);
    }
    toJSON() {
        return { ...this, password: undefined };
    }
};
exports.AdminEntity = AdminEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'full_name' }),
    __metadata("design:type", String)
], AdminEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', unique: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password' }),
    __metadata("design:type", String)
], AdminEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: admin_role_enum_1.AdminRoleEnum.ADMIN, name: 'role' }),
    __metadata("design:type", String)
], AdminEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminEntity.prototype, "hashPasswordBeforeInsert", null);
exports.AdminEntity = AdminEntity = __decorate([
    (0, typeorm_1.Entity)('admins')
], AdminEntity);
//# sourceMappingURL=admin.entity.js.map