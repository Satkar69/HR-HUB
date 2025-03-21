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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const core_api_response_1 = require("../../api/core-api-response");
const role_decorator_1 = require("../../decorators/role.decorator");
const admin_role_enum_1 = require("../../../common/enums/admin-role.enum");
const pagination_options_interface_1 = require("../../../common/interface/response/interface/pagination.options.interface");
const admin_dto_1 = require("../../../core/dtos/request/admin.dto");
const admin_use_case_service_1 = require("../../../use-cases/admin-use-cases/admin/admin-use-case.service");
let AdminController = class AdminController {
    constructor(adminUseCaseService) {
        this.adminUseCaseService = adminUseCaseService;
    }
    async createAdmin(createAdminDto) {
        return core_api_response_1.CoreApiResponse.success(await this.adminUseCaseService.createAdmin(createAdminDto), 201, 'Admin created successfully');
    }
    async updateAdmin(id, updateAdminDto) {
        return core_api_response_1.CoreApiResponse.success(await this.adminUseCaseService.updateAdmin(id, updateAdminDto), 200, 'Admin updated successfully');
    }
    async getAllAdmin(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.adminUseCaseService.getAllAdmin(), query);
    }
    async getAdmin(id) {
        return core_api_response_1.CoreApiResponse.success(await this.adminUseCaseService.getAdmin(id));
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, role_decorator_1.Roles)(admin_role_enum_1.AdminRoleEnum.SUPER_ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateAdmin", null);
__decorate([
    (0, common_1.Get)('/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllAdmin", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAdmin", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [admin_use_case_service_1.AdminUseCaseService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map