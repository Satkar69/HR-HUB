"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReviewUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const user_review_use_case_service_1 = require("./user-review-use-case.service");
const review_use_case_module_1 = require("../../review-use-cases/review-use-case.module");
const questionnaire_use_case_module_1 = require("../../questioninaire-use-cases/questionnaire-use-case.module");
const data_services_module_1 = require("../../../services/data-services/data-services.module");
const cls_store_module_1 = require("../../../libs/cls-store/cls-store.module");
const user_review_questionnaire_use_case_module_1 = require("./user-review-questionnaire/user-review-questionnaire-use-case.module");
const user_review_summary_use_case_module_1 = require("./user-review-summary/user-review-summary-use-case.module");
let UserReviewUseCaseModule = class UserReviewUseCaseModule {
};
exports.UserReviewUseCaseModule = UserReviewUseCaseModule;
exports.UserReviewUseCaseModule = UserReviewUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cls_store_module_1.ClsServiceModule,
            data_services_module_1.DataServicesModule,
            review_use_case_module_1.ReviewUseCaseModule,
            questionnaire_use_case_module_1.QuestionnaireUseCaseModule,
            user_review_questionnaire_use_case_module_1.UserReviewQuestionnaireUseCaseModule,
            user_review_summary_use_case_module_1.UserReviewSummaryUseCaseModule,
        ],
        providers: [user_review_use_case_service_1.UserReviewUseCaseService],
        exports: [user_review_use_case_service_1.UserReviewUseCaseService],
    })
], UserReviewUseCaseModule);
//# sourceMappingURL=user-review-use-case.module.js.map