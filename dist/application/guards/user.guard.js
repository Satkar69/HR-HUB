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
exports.UserGuard = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../core/abstracts");
const cls_store_abstract_1 = require("../../core/abstracts/adapters/cls-store.abstract");
const app_unauthorized_exception_1 = require("../exception/app-unauthorized.exception");
let UserGuard = class UserGuard {
    constructor(cls, dataServices) {
        this.cls = cls;
        this.dataServices = dataServices;
    }
    async canActivate() {
        const isPublic = this.cls.get('isPublic');
        if (isPublic) {
            return true;
        }
        const isUser = this.cls.get('isUser');
        if (isUser) {
            const payload = this.cls.get('payload');
            console.log('payload', payload);
            if (!payload) {
                throw new app_unauthorized_exception_1.default('Invalid token. Please login again.');
            }
            const user = await this.dataServices.user.getOneOrNull({
                email: payload.sub,
            });
            if (!user) {
                throw new app_unauthorized_exception_1.default('Invalid token. Please login again.');
            }
            this.cls.set('user', {
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                role: user.role,
                password: user.password,
            });
        }
        return true;
    }
};
exports.UserGuard = UserGuard;
exports.UserGuard = UserGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cls_store_abstract_1.IClsStore,
        abstracts_1.IDataServices])
], UserGuard);
//# sourceMappingURL=user.guard.js.map