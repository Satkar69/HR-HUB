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
exports.UserReviewSummaryController = void 0;
const common_1 = require("@nestjs/common");
const core_api_response_1 = require("../../../../api/core-api-response");
const manager_decorator_1 = require("../../../../decorators/manager.decorator");
const pagination_options_interface_1 = require("../../../../../common/interface/response/interface/pagination.options.interface");
const user_review_summary_use_case_service_1 = require("../../../../../use-cases/user-use-cases/user-review/user-review-summary/user-review-summary-use-case.service");
let UserReviewSummaryController = class UserReviewSummaryController {
    constructor(userReviewSummaryUseCaseService) {
        this.userReviewSummaryUseCaseService = userReviewSummaryUseCaseService;
    }
    async getMyLatestReviewSummary() {
        return core_api_response_1.CoreApiResponse.success(await this.userReviewSummaryUseCaseService.getUserLatestReviewSummary());
    }
    async getTeamAcknodlwdgedReviewSummaries(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.userReviewSummaryUseCaseService.getTeamAcknodlwdgedReviewSummaries(), query);
    }
    async getTeamUnAcknodlwdgedReviewSummaries(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.userReviewSummaryUseCaseService.getTeamUnAcknodlwdgedReviewSummaries(), query);
    }
    async acknowledgeReviewSummary(reviewSummaryId) {
        return core_api_response_1.CoreApiResponse.success(await this.userReviewSummaryUseCaseService.acknowdegeReviewSummary(reviewSummaryId));
    }
};
exports.UserReviewSummaryController = UserReviewSummaryController;
__decorate([
    (0, common_1.Get)('/my/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserReviewSummaryController.prototype, "getMyLatestReviewSummary", null);
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Get)('/my/team/acknowledged/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], UserReviewSummaryController.prototype, "getTeamAcknodlwdgedReviewSummaries", null);
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Get)('/my/team/unacknowledged/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], UserReviewSummaryController.prototype, "getTeamUnAcknodlwdgedReviewSummaries", null);
__decorate([
    (0, common_1.Patch)('/acknowledge/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserReviewSummaryController.prototype, "acknowledgeReviewSummary", null);
exports.UserReviewSummaryController = UserReviewSummaryController = __decorate([
    (0, common_1.Controller)('/review/summary'),
    __metadata("design:paramtypes", [user_review_summary_use_case_service_1.UserReviewSummaryUseCaseService])
], UserReviewSummaryController);
//# sourceMappingURL=user-review-summary.controller.js.map