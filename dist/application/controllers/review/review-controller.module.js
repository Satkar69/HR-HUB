"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewControllerModule = void 0;
const common_1 = require("@nestjs/common");
const review_controller_1 = require("./review-controller");
const review_use_case_module_1 = require("../../../use-cases/review-use-cases/review-use-case.module");
let ReviewControllerModule = class ReviewControllerModule {
};
exports.ReviewControllerModule = ReviewControllerModule;
exports.ReviewControllerModule = ReviewControllerModule = __decorate([
    (0, common_1.Module)({
        imports: [review_use_case_module_1.ReviewUseCaseModule],
        controllers: [review_controller_1.ReviewController],
    })
], ReviewControllerModule);
//# sourceMappingURL=review-controller.module.js.map