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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTeamMemberController = void 0;
const common_1 = require("@nestjs/common");
const admin_team_member_use_case_service_1 = require("../../../../../use-cases/admin-use-cases/admin-team/admin-team-member/admin-team-member-use-case.service");
const pagination_options_interface_1 = require("../../../../../common/interface/response/interface/pagination.options.interface");
const core_api_response_1 = require("../../../../api/core-api-response");
const teamMember_dto_1 = require("../../../../../core/dtos/request/teamMember.dto");
let AdminTeamMemberController = class AdminTeamMemberController {
    constructor(adminTeamMemberUseCaseService) {
        this.adminTeamMemberUseCaseService = adminTeamMemberUseCaseService;
    }
    async getAllTeamMembers(teamId, query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.adminTeamMemberUseCaseService.getTeamMembersByTeam(teamId), query);
    }
    async createTeamMember(addTeamMembersDto) {
        return core_api_response_1.CoreApiResponse.success(await this.adminTeamMemberUseCaseService.addTeamMember(addTeamMembersDto));
    }
    async deleteTeamMember(teamMemberId) {
        return core_api_response_1.CoreApiResponse.success(await this.adminTeamMemberUseCaseService.removeTeamMember(teamMemberId));
    }
};
exports.AdminTeamMemberController = AdminTeamMemberController;
__decorate([
    (0, common_1.Get)('/:id/member/get-all'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], AdminTeamMemberController.prototype, "getAllTeamMembers", null);
__decorate([
    (0, common_1.Post)('/member/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teamMember_dto_1.AddTeamMembersDto]),
    __metadata("design:returntype", Promise)
], AdminTeamMemberController.prototype, "createTeamMember", null);
__decorate([
    (0, common_1.Delete)('/member/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminTeamMemberController.prototype, "deleteTeamMember", null);
exports.AdminTeamMemberController = AdminTeamMemberController = __decorate([
    (0, common_1.Controller)('/team'),
    __metadata("design:paramtypes", [admin_team_member_use_case_service_1.AdminTeamMemberUseCaseService])
], AdminTeamMemberController);
//# sourceMappingURL=admin-team-member.controller.js.map