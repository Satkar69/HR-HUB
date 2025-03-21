"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberControllerModule = void 0;
const common_1 = require("@nestjs/common");
const team_member_controller_1 = require("./team-member.controller");
const team_member_use_case_module_1 = require("../../../use-cases/team-member-use-cases/team-member-use-case.module");
let TeamMemberControllerModule = class TeamMemberControllerModule {
};
exports.TeamMemberControllerModule = TeamMemberControllerModule;
exports.TeamMemberControllerModule = TeamMemberControllerModule = __decorate([
    (0, common_1.Module)({
        imports: [team_member_use_case_module_1.TeamMemberUseCaseModule],
        controllers: [team_member_controller_1.TeamMemberController],
    })
], TeamMemberControllerModule);
//# sourceMappingURL=team-member-controller.module.js.map