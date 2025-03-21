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
var AdminSeeder_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSeeder = void 0;
const common_1 = require("@nestjs/common");
const environment_config_service_1 = require("../../../../application/config/environment-config.service");
const admin_role_enum_1 = require("../../../../common/enums/admin-role.enum");
let AdminSeeder = AdminSeeder_1 = class AdminSeeder {
    constructor(configService) {
        this.configService = configService;
    }
    async seed(repository) {
        const adminUser = await repository.findOne({
            where: { email: this.configService.getDefaultAdminEmail() },
        });
        if (!adminUser) {
            const adminUser = repository.create({
                email: this.configService.getDefaultAdminEmail(),
                password: this.configService.getDefaultAdminPassword(),
                name: this.configService.getDefaultAdminName(),
                role: admin_role_enum_1.AdminRoleEnum.SUPER_ADMIN,
            });
            await repository.insert(adminUser);
        }
        else {
            common_1.Logger.log('Admin user already exists', AdminSeeder_1.name);
        }
    }
};
exports.AdminSeeder = AdminSeeder;
exports.AdminSeeder = AdminSeeder = AdminSeeder_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_config_service_1.EnvironmentConfigService])
], AdminSeeder);
//# sourceMappingURL=admin.seeder.js.map