"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTeamFactoryUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../../../core/models/user.model");
const team_model_1 = require("../../../core/models/team.model");
let AdminTeamFactoryUseCaseService = class AdminTeamFactoryUseCaseService {
    createTeam(createTeamDto) {
        const team = new team_model_1.TeamModel();
        if (createTeamDto.leader) {
            const userModel = new user_model_1.UserModel();
            userModel.id = createTeamDto.leader;
            team.leader = userModel;
        }
        if (createTeamDto.department)
            team.department = createTeamDto.department;
        return team;
    }
    updateTeam(team, updateTeamDto) {
        if (updateTeamDto.leader) {
            const userModel = new user_model_1.UserModel();
            userModel.id = updateTeamDto.leader;
            team.leader = userModel;
        }
        if (updateTeamDto.department)
            team.department = updateTeamDto.department;
        return team;
    }
};
exports.AdminTeamFactoryUseCaseService = AdminTeamFactoryUseCaseService;
exports.AdminTeamFactoryUseCaseService = AdminTeamFactoryUseCaseService = __decorate([
    (0, common_1.Injectable)()
], AdminTeamFactoryUseCaseService);
//# sourceMappingURL=admin-team-factory-use-case.service.js.map