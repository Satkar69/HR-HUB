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
exports.ReviewSummaryEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const review_entity_1 = require("./review.entity");
const user_entity_1 = require("./user.entity");
let ReviewSummaryEntity = class ReviewSummaryEntity extends base_entity_1.BaseEntity {
};
exports.ReviewSummaryEntity = ReviewSummaryEntity;
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ReviewSummaryEntity.prototype, "reviewee", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => review_entity_1.ReviewEntity),
    (0, typeorm_1.JoinColumn)({ name: 'self_review_id' }),
    __metadata("design:type", review_entity_1.ReviewEntity)
], ReviewSummaryEntity.prototype, "selfReview", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => review_entity_1.ReviewEntity),
    (0, typeorm_1.JoinColumn)({ name: 'manager_review_id' }),
    __metadata("design:type", review_entity_1.ReviewEntity)
], ReviewSummaryEntity.prototype, "managerReview", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'summary_questionnaire',
        type: 'jsonb',
        default: [],
    }),
    __metadata("design:type", Array)
], ReviewSummaryEntity.prototype, "summaryQuestionnaire", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'average_performance_rating',
        type: 'decimal',
        precision: 3,
        scale: 2,
        nullable: false,
        default: 0,
    }),
    __metadata("design:type", Number)
], ReviewSummaryEntity.prototype, "averagePerformanceRating", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_acknowledged', nullable: false, default: false }),
    __metadata("design:type", Boolean)
], ReviewSummaryEntity.prototype, "isAcknowledged", void 0);
exports.ReviewSummaryEntity = ReviewSummaryEntity = __decorate([
    (0, typeorm_1.Entity)('review_summaries')
], ReviewSummaryEntity);
//# sourceMappingURL=review-summary.entity.js.map