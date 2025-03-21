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
exports.UserReviewQuestionnaireUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../../core/abstracts");
const user_review_questionnaire_factory_use_case_service_1 = require("./user-review-questionnaire-factory-use-case.service");
const app_exception_1 = require("../../../../application/exception/app.exception");
let UserReviewQuestionnaireUseCaseService = class UserReviewQuestionnaireUseCaseService {
    constructor(dataServices, userReviewQuestionnaireFactoryUseCaseService) {
        this.dataServices = dataServices;
        this.userReviewQuestionnaireFactoryUseCaseService = userReviewQuestionnaireFactoryUseCaseService;
    }
    async updateQuestionnaires(updateQuestionnairesDto) {
        const questionnaires = updateQuestionnairesDto.questionnaires;
        if (questionnaires.length === 0) {
            throw new app_exception_1.default({ questionnaires: `Questionnaires cannot be empty` }, 'Questionnaires cannot be empty', 400);
        }
        const updatingQuestionnaires = [];
        questionnaires.map((questionnaire) => {
            const editedQuestionnaire = this.userReviewQuestionnaireFactoryUseCaseService.updateQuestionnaire(questionnaire);
            updatingQuestionnaires.push({
                id: questionnaire.questionnaireId,
                editedQuestionnaire,
            });
        });
        const updatedQuestionnaires = [];
        if (updatingQuestionnaires.length > 0) {
            await Promise.all(updatingQuestionnaires.map(async (updatingQuestionnaire) => {
                updatedQuestionnaires.push(await this.dataServices.questionnaire.update({ id: updatingQuestionnaire.id }, updatingQuestionnaire.editedQuestionnaire));
            }));
        }
        return updatedQuestionnaires;
    }
};
exports.UserReviewQuestionnaireUseCaseService = UserReviewQuestionnaireUseCaseService;
exports.UserReviewQuestionnaireUseCaseService = UserReviewQuestionnaireUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        user_review_questionnaire_factory_use_case_service_1.UserReviewQuestionnaireFactoryUseCaseService])
], UserReviewQuestionnaireUseCaseService);
//# sourceMappingURL=user-review-questionnaire-use-case.service.js.map