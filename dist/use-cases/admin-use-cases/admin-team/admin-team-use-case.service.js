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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTeamUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../core/abstracts");
const admin_team_factory_use_case_service_1 = require("./admin-team-factory-use-case.service");
const admin_team_member_factory_use_case_service_1 = require("./admin-team-member/admin-team-member-factory-use-case.service");
let AdminTeamUseCaseService = class AdminTeamUseCaseService {
    constructor(dataServices, adminTeamFactoryUseCaseService, adminTeamMemberFactoryUseCaseService) {
        this.dataServices = dataServices;
        this.adminTeamFactoryUseCaseService = adminTeamFactoryUseCaseService;
        this.adminTeamMemberFactoryUseCaseService = adminTeamMemberFactoryUseCaseService;
    }
    async getAllTeams() {
        return await this.dataServices.team.getAll();
    }
    async createTeam(createTeamDto) {
        const newTeam = this.adminTeamFactoryUseCaseService.createTeam(createTeamDto);
        const createdTeam = await this.dataServices.team.create(newTeam);
        const teamMembers = [];
        if (createTeamDto.members.length > 0) {
            createTeamDto.members.map((memberId) => teamMembers.push(this.adminTeamMemberFactoryUseCaseService.createTeamMember({
                team: createdTeam.id,
                member: memberId,
            }))),
                await this.dataServices.teamMember.createBulk(teamMembers);
        }
        return createdTeam;
    }
    async updateTeam(teamId, updateTeamDto) {
        const team = await this.dataServices.team.getOne({ id: teamId });
        const editedTeam = this.adminTeamFactoryUseCaseService.updateTeam(team, updateTeamDto);
        return await this.dataServices.team.update({ id: team.id }, editedTeam);
    }
    async deleteTeam(teamId) {
        return await this.dataServices.team.delete({ id: teamId });
    }
};
exports.AdminTeamUseCaseService = AdminTeamUseCaseService;
exports.AdminTeamUseCaseService = AdminTeamUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        admin_team_factory_use_case_service_1.AdminTeamFactoryUseCaseService,
        admin_team_member_factory_use_case_service_1.AdminTeamMemberFactoryUseCaseService])
], AdminTeamUseCaseService);
//# sourceMappingURL=admin-team-use-case.service.js.map