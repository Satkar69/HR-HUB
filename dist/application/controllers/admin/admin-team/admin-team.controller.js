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
exports.AdminTeamController = void 0;
const common_1 = require("@nestjs/common");
const core_api_response_1 = require("../../../api/core-api-response");
const pagination_options_interface_1 = require("../../../../common/interface/response/interface/pagination.options.interface");
const team_dto_1 = require("../../../../core/dtos/request/team.dto");
const admin_team_use_case_service_1 = require("../../../../use-cases/admin-use-cases/admin-team/admin-team-use-case.service");
let AdminTeamController = class AdminTeamController {
    constructor(adminTeamUseCaseService) {
        this.adminTeamUseCaseService = adminTeamUseCaseService;
    }
    async createTeam(createTeamDto) {
        return core_api_response_1.CoreApiResponse.success(await this.adminTeamUseCaseService.createTeam(createTeamDto));
    }
    async getAllTeams(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.adminTeamUseCaseService.getAllTeams(), query);
    }
    async updateTeam(teamId, updateTeamDto) {
        return core_api_response_1.CoreApiResponse.success(await this.adminTeamUseCaseService.updateTeam(teamId, updateTeamDto));
    }
    async deleteTeam(teamId) {
        return core_api_response_1.CoreApiResponse.success(await this.adminTeamUseCaseService.deleteTeam(teamId));
    }
};
exports.AdminTeamController = AdminTeamController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", Promise)
], AdminTeamController.prototype, "createTeam", null);
__decorate([
    (0, common_1.Get)('/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], AdminTeamController.prototype, "getAllTeams", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, team_dto_1.UpdateTeamDto]),
    __metadata("design:returntype", Promise)
], AdminTeamController.prototype, "updateTeam", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminTeamController.prototype, "deleteTeam", null);
exports.AdminTeamController = AdminTeamController = __decorate([
    (0, common_1.Controller)('/team'),
    __metadata("design:paramtypes", [admin_team_use_case_service_1.AdminTeamUseCaseService])
], AdminTeamController);
//# sourceMappingURL=admin-team.controller.js.map