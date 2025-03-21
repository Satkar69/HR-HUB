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
exports.QuestionEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const question_type_enum_1 = require("../../../../common/enums/question-type.enum");
let QuestionEntity = class QuestionEntity extends base_entity_1.BaseEntity {
};
exports.QuestionEntity = QuestionEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'question_type' }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "questionType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'question_id', nullable: false }),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "questionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'question_text', nullable: false }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "questionText", void 0);
exports.QuestionEntity = QuestionEntity = __decorate([
    (0, typeorm_1.Entity)('questions')
], QuestionEntity);
//# sourceMappingURL=question.entity.js.map