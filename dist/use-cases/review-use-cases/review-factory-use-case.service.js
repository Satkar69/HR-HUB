"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewFactoryUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const review_model_1 = require("../../core/models/review.model");
const user_model_1 = require("../../core/models/user.model");
let ReviewFactoryUseCaseService = class ReviewFactoryUseCaseService {
    createReview(reviewDto) {
        const review = new review_model_1.ReviewModel();
        if (reviewDto.reviewType)
            review.reviewType = reviewDto.reviewType;
        if (reviewDto.reviewer) {
            const userModel = new user_model_1.UserModel();
            userModel.id = reviewDto.reviewer;
            review.reviewer = userModel;
        }
        if (reviewDto.reviewee) {
            const userModel = new user_model_1.UserModel();
            userModel.id = reviewDto.reviewee;
            review.reviewee = userModel;
        }
        if (reviewDto.subject)
            review.subject = reviewDto.subject;
        if (reviewDto.description)
            review.description = reviewDto.description;
        if (reviewDto.progressStatus)
            review.progressStatus = reviewDto.progressStatus;
        if (reviewDto.dueDate)
            review.dueDate = reviewDto.dueDate;
        return review;
    }
    updateReviewProgessStatus(reviewDto) {
        const review = new review_model_1.ReviewModel();
        if (reviewDto.progressStatus)
            review.progressStatus = reviewDto.progressStatus;
        return review;
    }
};
exports.ReviewFactoryUseCaseService = ReviewFactoryUseCaseService;
exports.ReviewFactoryUseCaseService = ReviewFactoryUseCaseService = __decorate([
    (0, common_1.Injectable)()
], ReviewFactoryUseCaseService);
//# sourceMappingURL=review-factory-use-case.service.js.map