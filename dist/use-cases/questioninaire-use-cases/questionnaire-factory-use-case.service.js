"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireFactoryUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const questionnaire_model_1 = require("../../core/models/questionnaire.model");
const review_model_1 = require("../../core/models/review.model");
let QuestionnaireFactoryUseCaseService = class QuestionnaireFactoryUseCaseService {
    createQuestionnaire(createQuestionnaireDto) {
        const questionnaire = new questionnaire_model_1.QuestionnaireModel();
        if (createQuestionnaireDto.review) {
            const reviewModel = new review_model_1.ReviewModel();
            reviewModel.id = createQuestionnaireDto.review;
            questionnaire.review = reviewModel;
        }
        if (createQuestionnaireDto.question)
            questionnaire.question = createQuestionnaireDto.question;
        if (createQuestionnaireDto.answers)
            questionnaire.answers = createQuestionnaireDto.answers;
        if (createQuestionnaireDto.ratings)
            questionnaire.ratings = createQuestionnaireDto.ratings;
        return questionnaire;
    }
};
exports.QuestionnaireFactoryUseCaseService = QuestionnaireFactoryUseCaseService;
exports.QuestionnaireFactoryUseCaseService = QuestionnaireFactoryUseCaseService = __decorate([
    (0, common_1.Injectable)()
], QuestionnaireFactoryUseCaseService);
//# sourceMappingURL=questionnaire-factory-use-case.service.js.map