"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPeerNominationUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../../services/data-services/data-services.module");
const user_peer_nomination_factory_use_case_service_1 = require("./user-peer-nomination-factory-use-case.service");
const user_peer_nomination_use_case_service_1 = require("./user-peer-nomination-use-case.service");
const review_use_case_module_1 = require("../../review-use-cases/review-use-case.module");
const questionnaire_use_case_module_1 = require("../../questioninaire-use-cases/questionnaire-use-case.module");
const cls_store_module_1 = require("../../../libs/cls-store/cls-store.module");
let UserPeerNominationUseCaseModule = class UserPeerNominationUseCaseModule {
};
exports.UserPeerNominationUseCaseModule = UserPeerNominationUseCaseModule;
exports.UserPeerNominationUseCaseModule = UserPeerNominationUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            data_services_module_1.DataServicesModule,
            cls_store_module_1.ClsServiceModule,
            review_use_case_module_1.ReviewUseCaseModule,
            questionnaire_use_case_module_1.QuestionnaireUseCaseModule,
        ],
        providers: [
            user_peer_nomination_factory_use_case_service_1.UserPeerNominationFactoryUseCaseService,
            user_peer_nomination_use_case_service_1.UserPeerNominationUseCaseService,
        ],
        exports: [
            user_peer_nomination_factory_use_case_service_1.UserPeerNominationFactoryUseCaseService,
            user_peer_nomination_use_case_service_1.UserPeerNominationUseCaseService,
        ],
    })
], UserPeerNominationUseCaseModule);
//# sourceMappingURL=user-peer-nomination-use-case.module.js.map