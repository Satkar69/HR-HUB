"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminFeatUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../../services/data-services/data-services.module");
const admin_factory_service_1 = require("./admin-factory.service");
const admin_use_case_service_1 = require("./admin-use-case.service");
const admin_auth_use_case_service_1 = require("./admin-auth-use-case.service");
const bcrypt_module_1 = require("../../../libs/bcrypt/bcrypt.module");
const jwt_module_1 = require("../../../libs/jwt/jwt.module");
let AdminFeatUseCaseModule = class AdminFeatUseCaseModule {
};
exports.AdminFeatUseCaseModule = AdminFeatUseCaseModule;
exports.AdminFeatUseCaseModule = AdminFeatUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule, bcrypt_module_1.BcryptModule, jwt_module_1.JwtServiceModule],
        providers: [
            admin_factory_service_1.AdminFactoryService,
            admin_use_case_service_1.AdminUseCaseService,
            admin_auth_use_case_service_1.AdminAuthUseCaseService,
        ],
        exports: [admin_factory_service_1.AdminFactoryService, admin_use_case_service_1.AdminUseCaseService, admin_auth_use_case_service_1.AdminAuthUseCaseService],
    })
], AdminFeatUseCaseModule);
//# sourceMappingURL=admin-feat-use-case.module.js.map