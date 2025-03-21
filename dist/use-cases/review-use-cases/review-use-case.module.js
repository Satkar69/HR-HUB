"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const review_factory_use_case_service_1 = require("./review-factory-use-case.service");
const review_use_case_service_1 = require("./review-use-case.service");
const data_services_module_1 = require("../../services/data-services/data-services.module");
let ReviewUseCaseModule = class ReviewUseCaseModule {
};
exports.ReviewUseCaseModule = ReviewUseCaseModule;
exports.ReviewUseCaseModule = ReviewUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule],
        providers: [review_factory_use_case_service_1.ReviewFactoryUseCaseService, review_use_case_service_1.ReviewUseCaseService],
        exports: [review_factory_use_case_service_1.ReviewFactoryUseCaseService, review_use_case_service_1.ReviewUseCaseService],
    })
], ReviewUseCaseModule);
//# sourceMappingURL=review-use-case.module.js.map