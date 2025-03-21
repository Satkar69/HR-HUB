"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllerModule = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_module_1 = require("../../../libs/bcrypt/bcrypt.module");
const admin_auth_controller_1 = require("./admin-auth.controller");
const admin_user_use_case_module_1 = require("../../../use-cases/admin-use-cases/admin-user/admin-user-use-case.module");
const admin_user_auth_controller_1 = require("./admin-user-auth.controller");
const admin_feat_use_case_module_1 = require("../../../use-cases/admin-use-cases/admin/admin-feat-use-case.module");
const user_auth_use_case_module_1 = require("../../../use-cases/user-use-cases/user-auth/user-auth-use-case.module");
const user_auth_controller_1 = require("./user-auth.controller");
let AuthControllerModule = class AuthControllerModule {
};
exports.AuthControllerModule = AuthControllerModule;
exports.AuthControllerModule = AuthControllerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            admin_feat_use_case_module_1.AdminFeatUseCaseModule,
            admin_user_use_case_module_1.AdminUserUseCaseModule,
            user_auth_use_case_module_1.UserAuthUseCaseModule,
            bcrypt_module_1.BcryptModule,
        ],
        controllers: [
            admin_auth_controller_1.AdminAuthController,
            admin_user_auth_controller_1.AdminUserAuthController,
            user_auth_controller_1.UserAuthController,
        ],
    })
], AuthControllerModule);
//# sourceMappingURL=auth-controller.module.js.map