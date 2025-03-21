"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const user_auth_use_case_module_1 = require("./user-auth/user-auth-use-case.module");
const data_services_module_1 = require("../../services/data-services/data-services.module");
const cls_store_module_1 = require("../../libs/cls-store/cls-store.module");
const user_use_case_service_1 = require("./user-use-case-service");
const user_review_use_case_module_1 = require("./user-review/user-review-use-case.module");
const user_review_questionnaire_use_case_module_1 = require("./user-review/user-review-questionnaire/user-review-questionnaire-use-case.module");
const user_peer_nomination_use_case_module_1 = require("./user-peer-nomination/user-peer-nomination-use-case.module");
const user_team_member_use_case_service_1 = require("./user-team/user-team-member/user-team-member-use-case.service");
const user_team_use_case_service_1 = require("./user-team/user-team-use-case.service");
const user_notification_use_case_service_1 = require("./user-notification/user-notification-use-case.service");
const user_review_summary_use_case_module_1 = require("./user-review/user-review-summary/user-review-summary-use-case.module");
let UserUseCaseModule = class UserUseCaseModule {
};
exports.UserUseCaseModule = UserUseCaseModule;
exports.UserUseCaseModule = UserUseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cls_store_module_1.ClsServiceModule,
            data_services_module_1.DataServicesModule,
            user_auth_use_case_module_1.UserAuthUseCaseModule,
            user_review_use_case_module_1.UserReviewUseCaseModule,
            user_review_questionnaire_use_case_module_1.UserReviewQuestionnaireUseCaseModule,
            user_peer_nomination_use_case_module_1.UserPeerNominationUseCaseModule,
            user_review_summary_use_case_module_1.UserReviewSummaryUseCaseModule,
        ],
        providers: [
            user_use_case_service_1.UserUseCaseService,
            user_team_use_case_service_1.UserTeamUseCaseService,
            user_team_member_use_case_service_1.UserTeamMemberUseCaseService,
            user_notification_use_case_service_1.UserNotificationUseCaseService,
        ],
        exports: [
            user_use_case_service_1.UserUseCaseService,
            user_auth_use_case_module_1.UserAuthUseCaseModule,
            user_review_use_case_module_1.UserReviewUseCaseModule,
            user_review_questionnaire_use_case_module_1.UserReviewQuestionnaireUseCaseModule,
            user_peer_nomination_use_case_module_1.UserPeerNominationUseCaseModule,
            user_review_summary_use_case_module_1.UserReviewSummaryUseCaseModule,
            user_team_use_case_service_1.UserTeamUseCaseService,
            user_team_member_use_case_service_1.UserTeamMemberUseCaseService,
            user_notification_use_case_service_1.UserNotificationUseCaseService,
        ],
    })
], UserUseCaseModule);
//# sourceMappingURL=user-use-case-module.js.map