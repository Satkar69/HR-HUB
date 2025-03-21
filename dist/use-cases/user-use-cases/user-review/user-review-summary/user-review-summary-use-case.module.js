"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReviewSummaryUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const user_review_summary_factory_use_case_service_1 = require("./user-review-summary-factory-use-case.service");
const cls_store_module_1 = require("../../../../libs/cls-store/cls-store.module");
const data_services_module_1 = require("../../../../services/data-services/data-services.module");
const user_review_summary_use_case_service_1 = require("./user-review-summary-use-case.service");
let UserReviewSummaryUseCaseModule = class UserReviewSummaryUseCaseModule {
};
exports.UserReviewSummaryUseCaseModule = UserReviewSummaryUseCaseModule;
exports.UserReviewSummaryUseCaseModule = UserReviewSummaryUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [cls_store_module_1.ClsServiceModule, data_services_module_1.DataServicesModule],
        providers: [
            user_review_summary_factory_use_case_service_1.UserReviewSummaryFactoryUseCaseService,
            user_review_summary_use_case_service_1.UserReviewSummaryUseCaseService,
        ],
        exports: [
            user_review_summary_factory_use_case_service_1.UserReviewSummaryFactoryUseCaseService,
            user_review_summary_use_case_service_1.UserReviewSummaryUseCaseService,
        ],
    })
], UserReviewSummaryUseCaseModule);
//# sourceMappingURL=user-review-summary-use-case.module.js.map