"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReviewSummaryFactoryUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const review_model_1 = require("../../../../core/models/review.model");
const review_summary_model_1 = require("../../../../core/models/review-summary.model");
const user_model_1 = require("../../../../core/models/user.model");
let UserReviewSummaryFactoryUseCaseService = class UserReviewSummaryFactoryUseCaseService {
    createReviewSummary(createReviewSummaryDto) {
        const reviewSummary = new review_summary_model_1.ReviewSummaryModel();
        if (createReviewSummaryDto.reviewee) {
            const userModel = new user_model_1.UserModel();
            userModel.id = createReviewSummaryDto.reviewee;
            reviewSummary.reviewee = userModel;
        }
        if (createReviewSummaryDto.selfReview) {
            const reviewModel = new review_model_1.ReviewModel();
            reviewModel.id = createReviewSummaryDto.selfReview;
            reviewSummary.selfReview = reviewModel;
        }
        if (createReviewSummaryDto.managerReview) {
            const reviewModel = new review_model_1.ReviewModel();
            reviewModel.id = createReviewSummaryDto.managerReview;
            reviewSummary.managerReview = reviewModel;
        }
        if (createReviewSummaryDto.summaryQuestionnaire)
            reviewSummary.summaryQuestionnaire =
                createReviewSummaryDto.summaryQuestionnaire;
        if (createReviewSummaryDto.averagePerformanceRating)
            reviewSummary.averagePerformanceRating =
                createReviewSummaryDto.averagePerformanceRating;
        if (createReviewSummaryDto.isAcknowledged)
            reviewSummary.isAcknowledged = createReviewSummaryDto.isAcknowledged;
        return reviewSummary;
    }
    updateReviewSummaryAcknowledgement(updateReviewSummaryAcknowledgementDto) {
        const reviewSummary = new review_summary_model_1.ReviewSummaryModel();
        if (updateReviewSummaryAcknowledgementDto.isAcknowledged)
            reviewSummary.isAcknowledged =
                updateReviewSummaryAcknowledgementDto.isAcknowledged;
        return reviewSummary;
    }
};
exports.UserReviewSummaryFactoryUseCaseService = UserReviewSummaryFactoryUseCaseService;
exports.UserReviewSummaryFactoryUseCaseService = UserReviewSummaryFactoryUseCaseService = __decorate([
    (0, common_1.Injectable)()
], UserReviewSummaryFactoryUseCaseService);
//# sourceMappingURL=user-review-summary-factory-use-case.service.js.map