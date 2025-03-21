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
exports.UserReviewController = void 0;
const common_1 = require("@nestjs/common");
const core_api_response_1 = require("../../../api/core-api-response");
const manager_decorator_1 = require("../../../decorators/manager.decorator");
const pagination_options_interface_1 = require("../../../../common/interface/response/interface/pagination.options.interface");
const questionnaire_dto_1 = require("../../../../core/dtos/request/questionnaire.dto");
const review_dto_1 = require("../../../../core/dtos/request/review.dto");
const user_review_use_case_service_1 = require("../../../../use-cases/user-use-cases/user-review/user-review-use-case.service");
let UserReviewController = class UserReviewController {
    constructor(userReviewUseCaseService) {
        this.userReviewUseCaseService = userReviewUseCaseService;
    }
    async getMySelfReviews(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.userReviewUseCaseService.getMySelfReviews(), query);
    }
    async getMyManagerReviews(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.userReviewUseCaseService.getMyManagerReviews(), query);
    }
    async getMyPeerReviews(query) {
        return core_api_response_1.CoreApiResponse.pagination(await this.userReviewUseCaseService.getMyPeerReviewsAsNominee(), query);
    }
    async createSelfReview(reviewDto) {
        return core_api_response_1.CoreApiResponse.success(await this.userReviewUseCaseService.createSelfReview(reviewDto));
    }
    async submitReview(reviewId, updateQuestionnairesDto) {
        return core_api_response_1.CoreApiResponse.success(await this.userReviewUseCaseService.submitReviewById(reviewId, updateQuestionnairesDto));
    }
    async getMyTeamMembersSelfReviews() {
        return core_api_response_1.CoreApiResponse.success(await this.userReviewUseCaseService.getMyTeamSelfReviews());
    }
    async getMyTeamMembersManagerReviews() {
        return core_api_response_1.CoreApiResponse.success(await this.userReviewUseCaseService.getMyTeamManagerReviews());
    }
    async getMyTeamMembersPeerReviews() {
        return core_api_response_1.CoreApiResponse.success(await this.userReviewUseCaseService.getMyTeamPeerReviews());
    }
    async createManagerReview(reviewDto) {
        return core_api_response_1.CoreApiResponse.success(await this.userReviewUseCaseService.createManagerReview(reviewDto));
    }
    async markAsComplete(reviewId) {
        return core_api_response_1.CoreApiResponse.success(await this.userReviewUseCaseService.markReviewAsCompleted(reviewId));
    }
};
exports.UserReviewController = UserReviewController;
__decorate([
    (0, common_1.Get)('/my/self/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "getMySelfReviews", null);
__decorate([
    (0, common_1.Get)('/my/manager/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "getMyManagerReviews", null);
__decorate([
    (0, common_1.Get)('/my/peer/get-all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_options_interface_1.IPaginationQuery]),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "getMyPeerReviews", null);
__decorate([
    (0, common_1.Post)('/self/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.ReviewDto]),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "createSelfReview", null);
__decorate([
    (0, common_1.Patch)('/submit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, questionnaire_dto_1.UpdateQuestionnairesDto]),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "submitReview", null);
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Get)('/my-team/self/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "getMyTeamMembersSelfReviews", null);
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Get)('/my-team/manager/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "getMyTeamMembersManagerReviews", null);
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Get)('/my-team/peer/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "getMyTeamMembersPeerReviews", null);
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Post)('/manager/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.ReviewDto]),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "createManagerReview", null);
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Patch)('/mark-as-complete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserReviewController.prototype, "markAsComplete", null);
exports.UserReviewController = UserReviewController = __decorate([
    (0, common_1.Controller)('/review'),
    __metadata("design:paramtypes", [user_review_use_case_service_1.UserReviewUseCaseService])
], UserReviewController);
//# sourceMappingURL=user-review.controller.js.map