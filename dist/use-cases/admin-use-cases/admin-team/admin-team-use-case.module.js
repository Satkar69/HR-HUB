"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTeamUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../../services/data-services/data-services.module");
const admin_team_use_case_service_1 = require("./admin-team-use-case.service");
const admin_team_factory_use_case_service_1 = require("./admin-team-factory-use-case.service");
const admin_team_member_use_case_module_1 = require("./admin-team-member/admin-team-member-use-case.module");
let AdminTeamUseCaseModule = class AdminTeamUseCaseModule {
};
exports.AdminTeamUseCaseModule = AdminTeamUseCaseModule;
exports.AdminTeamUseCaseModule = AdminTeamUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule, admin_team_member_use_case_module_1.AdminTeamMemberUseCaseModule],
        providers: [admin_team_use_case_service_1.AdminTeamUseCaseService, admin_team_factory_use_case_service_1.AdminTeamFactoryUseCaseService],
        exports: [admin_team_use_case_service_1.AdminTeamUseCaseService, admin_team_factory_use_case_service_1.AdminTeamFactoryUseCaseService],
    })
], AdminTeamUseCaseModule);
//# sourceMappingURL=admin-team-use-case.module.js.map