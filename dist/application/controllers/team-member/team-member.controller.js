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
exports.TeamMemberController = void 0;
const common_1 = require("@nestjs/common");
const core_api_response_1 = require("../../api/core-api-response");
const team_member_use_case_service_1 = require("../../../use-cases/team-member-use-cases/team-member-use-case.service");
let TeamMemberController = class TeamMemberController {
    constructor(teamMemberUseCaseService) {
        this.teamMemberUseCaseService = teamMemberUseCaseService;
    }
    async getTeamMember(teamMemberId) {
        return core_api_response_1.CoreApiResponse.success(await this.teamMemberUseCaseService.getTeamMemberbyId(teamMemberId));
    }
};
exports.TeamMemberController = TeamMemberController;
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "getTeamMember", null);
exports.TeamMemberController = TeamMemberController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [team_member_use_case_service_1.TeamMemberUseCaseService])
], TeamMemberController);
//# sourceMappingURL=team-member.controller.js.map