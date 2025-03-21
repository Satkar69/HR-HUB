"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminControllerModule = void 0;
const common_1 = require("@nestjs/common");
const admin_use_case_module_1 = require("../../../use-cases/admin-use-cases/admin-use-case.module");
const admin_controller_1 = require("./admin.controller");
const admin_user_controller_1 = require("./admin-user/admin-user.controller");
const admin_team_controller_1 = require("./admin-team/admin-team.controller");
const admin_team_member_controller_1 = require("./admin-team/admin-team-member/admin-team-member.controller");
let AdminControllerModule = class AdminControllerModule {
};
exports.AdminControllerModule = AdminControllerModule;
exports.AdminControllerModule = AdminControllerModule = __decorate([
    (0, common_1.Module)({
        imports: [admin_use_case_module_1.AdminUseCaseModule],
        controllers: [
            admin_controller_1.AdminController,
            admin_user_controller_1.AdminUserController,
            admin_team_controller_1.AdminTeamController,
            admin_team_member_controller_1.AdminTeamMemberController,
        ],
    })
], AdminControllerModule);
//# sourceMappingURL=admin-controller.module.js.map