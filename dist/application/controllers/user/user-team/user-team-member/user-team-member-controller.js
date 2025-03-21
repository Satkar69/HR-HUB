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
exports.UserTeamMemberController = void 0;
const common_1 = require("@nestjs/common");
const pagination_options_interface_1 = require("../../../../../common/interface/response/interface/pagination.options.interface");
const core_api_response_1 = require("../../../../api/core-api-response");
const user_team_member_use_case_service_1 = require("../../../../../use-cases/user-use-cases/user-team/user-team-member/user-team-member-use-case.service");
const manager_decorator_1 = require("../../../../decorators/manager.decorator");
let UserTeamMemberController = class UserTeamMemberController {
    constructor(userTeamMemberUseCaseService) {
        this.userTeamMemberUseCaseService = userTeamMemberUseCaseService;
    }
    async getMyTeamMembers(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.userTeamMemberUseCaseService.getMyTeamMembers(), query);
    }
};
exports.UserTeamMemberController = UserTeamMemberController;
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Get)('/get-my-members'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], UserTeamMemberController.prototype, "getMyTeamMembers", null);
exports.UserTeamMemberController = UserTeamMemberController = __decorate([
    (0, common_1.Controller)('/team/member'),
    __metadata("design:paramtypes", [user_team_member_use_case_service_1.UserTeamMemberUseCaseService])
], UserTeamMemberController);
//# sourceMappingURL=user-team-member-controller.js.map