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
exports.UserReviewSummaryUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../../core/abstracts");
const cls_store_abstract_1 = require("../../../../core/abstracts/adapters/cls-store.abstract");
const review_summary_dto_1 = require("../../../../core/dtos/review-summary.dto");
const user_review_summary_factory_use_case_service_1 = require("./user-review-summary-factory-use-case.service");
const app_exception_1 = require("../../../../application/exception/app.exception");
let UserReviewSummaryUseCaseService = class UserReviewSummaryUseCaseService {
    constructor(dataServices, cls, userReviewSummaryAcknodledgeFactoryUseCaseService) {
        this.dataServices = dataServices;
        this.cls = cls;
        this.userReviewSummaryAcknodledgeFactoryUseCaseService = userReviewSummaryAcknodledgeFactoryUseCaseService;
    }
    async getUserLatestReviewSummary() {
        const userId = this.cls.get('user')?.id;
        const reviewSummaries = await this.dataServices.reviewSummary.getAllWithoutPagination({
            reviewee: { id: userId },
        });
        if (reviewSummaries.length === 0) {
            return {};
        }
        const reviewSummary = reviewSummaries[reviewSummaries.length - 1];
        return reviewSummary;
    }
    async getTeamAcknodlwdgedReviewSummaries() {
        const userId = this.cls.get('user')?.id;
        const reviewSummaries = await this.dataServices.reviewSummary.getAll({
            managerReview: { reviewer: { id: userId } },
            isAcknowledged: true,
        }, { reviewee: true });
        return reviewSummaries;
    }
    async getTeamUnAcknodlwdgedReviewSummaries() {
        const userId = this.cls.get('user')?.id;
        const reviewSummaries = await this.dataServices.reviewSummary.getAll({
            managerReview: { reviewer: { id: userId } },
            isAcknowledged: false,
        }, { reviewee: true });
        return reviewSummaries;
    }
    async acknowdegeReviewSummary(reviewSummaryId) {
        const userId = this.cls.get('user')?.id;
        const reviewSummary = await this.dataServices.reviewSummary.getOneOrNull({
            id: reviewSummaryId,
            reviewee: { id: userId },
        });
        if (!reviewSummary) {
            throw new app_exception_1.default({ message: 'You can only acknowledge your own review summary' }, 'You can only acknowledge your own review summary', 401);
        }
        if (reviewSummary.isAcknowledged === true) {
            throw new app_exception_1.default({ message: 'Review Summary already acknowledged' }, 'Review Summary already acknowledged', 400);
        }
        const updateReviewSummaryAcknowledgementDto = new review_summary_dto_1.UpdateReviewSummaryAcknowledgementDto();
        updateReviewSummaryAcknowledgementDto.isAcknowledged = true;
        const acknodledgedReviewSummary = this.userReviewSummaryAcknodledgeFactoryUseCaseService.updateReviewSummaryAcknowledgement(updateReviewSummaryAcknowledgementDto);
        return await this.dataServices.reviewSummary.update({ id: reviewSummaryId }, acknodledgedReviewSummary);
    }
};
exports.UserReviewSummaryUseCaseService = UserReviewSummaryUseCaseService;
exports.UserReviewSummaryUseCaseService = UserReviewSummaryUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        cls_store_abstract_1.IClsStore,
        user_review_summary_factory_use_case_service_1.UserReviewSummaryFactoryUseCaseService])
], UserReviewSummaryUseCaseService);
//# sourceMappingURL=user-review-summary-use-case.service.js.map