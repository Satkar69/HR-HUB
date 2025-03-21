"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReviewQuestionnaireUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../../../services/data-services/data-services.module");
const user_review_questionnaire_factory_use_case_service_1 = require("./user-review-questionnaire-factory-use-case.service");
const user_review_questionnaire_use_case_service_1 = require("./user-review-questionnaire-use-case.service");
const review_use_case_module_1 = require("../../../review-use-cases/review-use-case.module");
let UserReviewQuestionnaireUseCaseModule = class UserReviewQuestionnaireUseCaseModule {
};
exports.UserReviewQuestionnaireUseCaseModule = UserReviewQuestionnaireUseCaseModule;
exports.UserReviewQuestionnaireUseCaseModule = UserReviewQuestionnaireUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule, review_use_case_module_1.ReviewUseCaseModule],
        providers: [
            user_review_questionnaire_factory_use_case_service_1.UserReviewQuestionnaireFactoryUseCaseService,
            user_review_questionnaire_use_case_service_1.UserReviewQuestionnaireUseCaseService,
        ],
        exports: [
            user_review_questionnaire_factory_use_case_service_1.UserReviewQuestionnaireFactoryUseCaseService,
            user_review_questionnaire_use_case_service_1.UserReviewQuestionnaireUseCaseService,
        ],
    })
], UserReviewQuestionnaireUseCaseModule);
//# sourceMappingURL=user-review-questionnaire-use-case.module.js.map