"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_module_1 = require("./auth/auth-controller.module");
const admin_controller_module_1 = require("./admin/admin-controller.module");
const user_controller_module_1 = require("./user/user-controller.module");
const team_controller_module_1 = require("./team/team-controller.module");
const team_member_controller_module_1 = require("./team-member/team-member-controller.module");
const review_controller_module_1 = require("./review/review-controller.module");
const review_summary_controller_module_1 = require("./review-summary/review-summary-controller.module");
let ControllerModule = class ControllerModule {
};
exports.ControllerModule = ControllerModule;
exports.ControllerModule = ControllerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_controller_module_1.AuthControllerModule,
            admin_controller_module_1.AdminControllerModule,
            user_controller_module_1.UserControllerModule,
            team_controller_module_1.TeamControllerModule,
            team_member_controller_module_1.TeamMemberControllerModule,
            review_controller_module_1.ReviewControllerModule,
            review_summary_controller_module_1.ReviewSummaryControllerModule,
        ],
        exports: [
            auth_controller_module_1.AuthControllerModule,
            admin_controller_module_1.AdminControllerModule,
            user_controller_module_1.UserControllerModule,
            team_controller_module_1.TeamControllerModule,
            team_member_controller_module_1.TeamMemberControllerModule,
            review_controller_module_1.ReviewControllerModule,
            review_summary_controller_module_1.ReviewSummaryControllerModule,
        ],
    })
], ControllerModule);
//# sourceMappingURL=controller.module.js.map