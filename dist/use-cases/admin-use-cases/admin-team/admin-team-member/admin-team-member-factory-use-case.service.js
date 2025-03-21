"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTeamMemberFactoryUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const team_member_model_1 = require("../../../../core/models/team-member.model");
const team_model_1 = require("../../../../core/models/team.model");
const user_model_1 = require("../../../../core/models/user.model");
let AdminTeamMemberFactoryUseCaseService = class AdminTeamMemberFactoryUseCaseService {
    createTeamMember(createTeamMemberDto) {
        const teamMember = new team_member_model_1.TeamMemberModel();
        if (createTeamMemberDto.team) {
            const teamModel = new team_model_1.TeamModel();
            teamModel.id = createTeamMemberDto.team;
            teamMember.team = teamModel;
        }
        if (createTeamMemberDto.member) {
            const userModel = new user_model_1.UserModel();
            userModel.id = createTeamMemberDto.member;
            teamMember.member = userModel;
        }
        return teamMember;
    }
};
exports.AdminTeamMemberFactoryUseCaseService = AdminTeamMemberFactoryUseCaseService;
exports.AdminTeamMemberFactoryUseCaseService = AdminTeamMemberFactoryUseCaseService = __decorate([
    (0, common_1.Injectable)()
], AdminTeamMemberFactoryUseCaseService);
//# sourceMappingURL=admin-team-member-factory-use-case.service.js.map