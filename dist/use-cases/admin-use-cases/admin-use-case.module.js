"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const admin_feat_use_case_module_1 = require("./admin/admin-feat-use-case.module");
const admin_user_use_case_module_1 = require("./admin-user/admin-user-use-case.module");
const admin_team_use_case_module_1 = require("./admin-team/admin-team-use-case.module");
const admin_team_member_use_case_module_1 = require("./admin-team/admin-team-member/admin-team-member-use-case.module");
let AdminUseCaseModule = class AdminUseCaseModule {
};
exports.AdminUseCaseModule = AdminUseCaseModule;
exports.AdminUseCaseModule = AdminUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            admin_feat_use_case_module_1.AdminFeatUseCaseModule,
            admin_user_use_case_module_1.AdminUserUseCaseModule,
            admin_team_use_case_module_1.AdminTeamUseCaseModule,
            admin_team_member_use_case_module_1.AdminTeamMemberUseCaseModule,
        ],
        exports: [
            admin_feat_use_case_module_1.AdminFeatUseCaseModule,
            admin_user_use_case_module_1.AdminUserUseCaseModule,
            admin_team_use_case_module_1.AdminTeamUseCaseModule,
            admin_team_member_use_case_module_1.AdminTeamMemberUseCaseModule,
        ],
    })
], AdminUseCaseModule);
//# sourceMappingURL=admin-use-case.module.js.map