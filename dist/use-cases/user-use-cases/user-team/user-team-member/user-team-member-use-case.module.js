"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamMemberUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../../../services/data-services/data-services.module");
const user_team_member_use_case_service_1 = require("./user-team-member-use-case.service");
const cls_store_module_1 = require("../../../../libs/cls-store/cls-store.module");
let UserTeamMemberUseCaseModule = class UserTeamMemberUseCaseModule {
};
exports.UserTeamMemberUseCaseModule = UserTeamMemberUseCaseModule;
exports.UserTeamMemberUseCaseModule = UserTeamMemberUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule, cls_store_module_1.ClsServiceModule],
        providers: [user_team_member_use_case_service_1.UserTeamMemberUseCaseService],
        exports: [user_team_member_use_case_service_1.UserTeamMemberUseCaseService],
    })
], UserTeamMemberUseCaseModule);
//# sourceMappingURL=user-team-member-use-case.module.js.map