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
exports.ManagerGuard = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../core/abstracts");
const cls_store_abstract_1 = require("../../core/abstracts/adapters/cls-store.abstract");
const app_unauthorized_exception_1 = require("../exception/app-unauthorized.exception");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let ManagerGuard = class ManagerGuard {
    constructor(cls, dataServices) {
        this.cls = cls;
        this.dataServices = dataServices;
    }
    async canActivate() {
        const isPublic = this.cls.get('isPublic');
        if (isPublic) {
            return true;
        }
        const isManager = this.cls.get('isManager');
        if (isManager) {
            const payload = this.cls.get('payload');
            const user = await this.dataServices.user.getOneOrNull({
                email: payload.sub,
            });
            if (user.role !== user_role_enum_1.UserRoleEnum.MANAGER) {
                throw new app_unauthorized_exception_1.default('Only manager are authorized to perform this action.');
            }
        }
        return true;
    }
};
exports.ManagerGuard = ManagerGuard;
exports.ManagerGuard = ManagerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cls_store_abstract_1.IClsStore,
        abstracts_1.IDataServices])
], ManagerGuard);
//# sourceMappingURL=manager.guard.js.map