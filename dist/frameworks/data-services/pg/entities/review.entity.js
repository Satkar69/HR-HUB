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
exports.ReviewEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
const review_type_enum_1 = require("../../../../common/enums/review-type.enum");
const review_progress_status_enum_1 = require("../../../../common/enums/review-progress-status.enum");
const questionnaire_entity_1 = require("./questionnaire.entity");
let ReviewEntity = class ReviewEntity extends base_entity_1.BaseEntity {
};
exports.ReviewEntity = ReviewEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'review_type' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "reviewType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'reviewer_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ReviewEntity.prototype, "reviewer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'reviewee_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ReviewEntity.prototype, "reviewee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'subject' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'progress_status' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "progressStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => questionnaire_entity_1.QuestionnaireEntity, (questionnaire) => questionnaire.review, { eager: true }),
    __metadata("design:type", Array)
], ReviewEntity.prototype, "questionnaires", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'due_date' }),
    __metadata("design:type", Date)
], ReviewEntity.prototype, "dueDate", void 0);
exports.ReviewEntity = ReviewEntity = __decorate([
    (0, typeorm_1.Entity)('reviews')
], ReviewEntity);
//# sourceMappingURL=review.entity.js.map