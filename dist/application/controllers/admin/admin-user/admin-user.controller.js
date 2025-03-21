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
exports.AdminUserController = void 0;
const common_1 = require("@nestjs/common");
const core_api_response_1 = require("../../../api/core-api-response");
const pagination_options_interface_1 = require("../../../../common/interface/response/interface/pagination.options.interface");
const admin_user_use_case_service_1 = require("../../../../use-cases/admin-use-cases/admin-user/admin-user-use-case.service");
let AdminUserController = class AdminUserController {
    constructor(adminUserUseCaseService) {
        this.adminUserUseCaseService = adminUserUseCaseService;
    }
    async getAllUser(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.adminUserUseCaseService.getAllUser(), query);
    }
    async getUser(userId) {
        return core_api_response_1.CoreApiResponse.success(await this.adminUserUseCaseService.getUserById(userId));
    }
    async getAllEmployeeUser(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.adminUserUseCaseService.getAllEmployees(), query);
    }
    async getAllNonTeamEmployeeUsers() {
        return core_api_response_1.CoreApiResponse.success(await this.adminUserUseCaseService.getAllNonTeamEmployees());
    }
    async getAllNonTeamManagerUsers() {
        return core_api_response_1.CoreApiResponse.success(await this.adminUserUseCaseService.getAllNonTeamManagers());
    }
    async getAllManagerUser(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.adminUserUseCaseService.getAllManagers(), query);
    }
};
exports.AdminUserController = AdminUserController;
__decorate([
    (0, common_1.Get)('/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('/employee/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "getAllEmployeeUser", null);
__decorate([
    (0, common_1.Get)('/employee/non-team/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "getAllNonTeamEmployeeUsers", null);
__decorate([
    (0, common_1.Get)('/manager/non-team/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "getAllNonTeamManagerUsers", null);
__decorate([
    (0, common_1.Get)('/manager/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "getAllManagerUser", null);
exports.AdminUserController = AdminUserController = __decorate([
    (0, common_1.Controller)('/user'),
    __metadata("design:paramtypes", [admin_user_use_case_service_1.AdminUserUseCaseService])
], AdminUserController);
//# sourceMappingURL=admin-user.controller.js.map