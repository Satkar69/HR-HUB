"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminFactoryService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../../../core/models");
const admin_role_enum_1 = require("../../../common/enums/admin-role.enum");
let AdminFactoryService = class AdminFactoryService {
    createNewAdmin(createAdminDto) {
        const admin = new models_1.AdminModel();
        admin.name = createAdminDto.name;
        admin.email = createAdminDto.email;
        admin.password = createAdminDto.password;
        admin.role = admin_role_enum_1.AdminRoleEnum.ADMIN;
        return admin;
    }
    updateAdmin(updateAdminDto) {
        const newAdmin = new models_1.AdminModel();
        newAdmin.name = updateAdminDto.name;
        newAdmin.email = updateAdminDto.email;
        return newAdmin;
    }
    updateAdminPassword(updateAdminPasswordDto) {
        const newAdmin = new models_1.AdminModel();
        newAdmin.password = updateAdminPasswordDto.newPassword;
        return newAdmin;
    }
};
exports.AdminFactoryService = AdminFactoryService;
exports.AdminFactoryService = AdminFactoryService = __decorate([
    (0, common_1.Injectable)()
], AdminFactoryService);
//# sourceMappingURL=admin-factory.service.js.map