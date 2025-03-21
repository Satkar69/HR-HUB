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
exports.QuestionnaireEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const review_entity_1 = require("./review.entity");
let QuestionnaireEntity = class QuestionnaireEntity extends base_entity_1.BaseEntity {
};
exports.QuestionnaireEntity = QuestionnaireEntity;
__decorate([
    (0, typeorm_1.ManyToOne)(() => review_entity_1.ReviewEntity, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'review_id' }),
    __metadata("design:type", review_entity_1.ReviewEntity)
], QuestionnaireEntity.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'question', nullable: false }),
    __metadata("design:type", String)
], QuestionnaireEntity.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'answers',
        type: 'text',
        nullable: true,
        array: true,
        default: [],
    }),
    __metadata("design:type", Array)
], QuestionnaireEntity.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ratings', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], QuestionnaireEntity.prototype, "ratings", void 0);
exports.QuestionnaireEntity = QuestionnaireEntity = __decorate([
    (0, typeorm_1.Entity)('questionnaires')
], QuestionnaireEntity);
//# sourceMappingURL=questionnaire.entity.js.map