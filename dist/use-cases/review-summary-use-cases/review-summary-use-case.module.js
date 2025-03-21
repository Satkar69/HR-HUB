"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewSummaryUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../services/data-services/data-services.module");
const review_summary_use_case_service_1 = require("./review-summary-use-case.service");
let ReviewSummaryUseCaseModule = class ReviewSummaryUseCaseModule {
};
exports.ReviewSummaryUseCaseModule = ReviewSummaryUseCaseModule;
exports.ReviewSummaryUseCaseModule = ReviewSummaryUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule],
        providers: [review_summary_use_case_service_1.ReviewSummaryUseCaseService],
        exports: [review_summary_use_case_service_1.ReviewSummaryUseCaseService],
    })
], ReviewSummaryUseCaseModule);
//# sourceMappingURL=review-summary-use-case.module.js.map