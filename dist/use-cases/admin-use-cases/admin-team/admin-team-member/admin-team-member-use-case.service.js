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
exports.AdminTeamMemberUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../../core/abstracts");
const admin_team_member_factory_use_case_service_1 = require("./admin-team-member-factory-use-case.service");
const app_exception_1 = require("../../../../application/exception/app.exception");
let AdminTeamMemberUseCaseService = class AdminTeamMemberUseCaseService {
    constructor(dataServices, adminTeamMemberFactoryUseCaseService) {
        this.dataServices = dataServices;
        this.adminTeamMemberFactoryUseCaseService = adminTeamMemberFactoryUseCaseService;
    }
    async getTeamMembersByTeam(teamId) {
        return await this.dataServices.teamMember.getAll({ team: { id: teamId } });
    }
    async addTeamMember(addTeamMembersDto) {
        const teadId = addTeamMembersDto.team;
        const members = addTeamMembersDto.members;
        if (members.length === 0) {
            throw new app_exception_1.default({ members: `Members cannot be empty` }, 'Members cannot be empty', 400);
        }
        const newTeamMembers = [];
        members.map((member) => {
            newTeamMembers.push(this.adminTeamMemberFactoryUseCaseService.createTeamMember({
                team: teadId,
                member: member,
            }));
        });
        const createdTeamMembers = await this.dataServices.teamMember.createBulk(newTeamMembers);
        return createdTeamMembers;
    }
    async removeTeamMember(teamMemberId) {
        const teamMember = await this.dataServices.teamMember.getOne({
            id: teamMemberId,
        });
        const deletedTeamMember = await this.dataServices.teamMember.delete({
            id: teamMember.id,
        });
        return deletedTeamMember;
    }
};
exports.AdminTeamMemberUseCaseService = AdminTeamMemberUseCaseService;
exports.AdminTeamMemberUseCaseService = AdminTeamMemberUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        admin_team_member_factory_use_case_service_1.AdminTeamMemberFactoryUseCaseService])
], AdminTeamMemberUseCaseService);
//# sourceMappingURL=admin-team-member-use-case.service.js.map