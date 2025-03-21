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
exports.TeamController = void 0;
const common_1 = require("@nestjs/common");
const core_api_response_1 = require("../../api/core-api-response");
const team_use_case_service_1 = require("../../../use-cases/team-use-cases/team-use-case.service");
let TeamController = class TeamController {
    constructor(teamUseCaseService) {
        this.teamUseCaseService = teamUseCaseService;
    }
    async getTeam(teamId) {
        return core_api_response_1.CoreApiResponse.success(await this.teamUseCaseService.getTeambyId(teamId));
    }
};
exports.TeamController = TeamController;
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getTeam", null);
exports.TeamController = TeamController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [team_use_case_service_1.TeamUseCaseService])
], TeamController);
//# sourceMappingURL=team-controller.js.map