"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllerModule = void 0;
const common_1 = require("@nestjs/common");
const user_team_controller_1 = require("./user-team/user-team-controller");
const user_use_case_module_1 = require("../../../use-cases/user-use-cases/user-use-case-module");
const user_team_member_controller_1 = require("./user-team/user-team-member/user-team-member-controller");
const user_controller_1 = require("./user-controller");
const user_review_controller_1 = require("./user-review/user-review.controller");
const user_review_questionnaire_controller_1 = require("./user-review/user-review-questionnaire/user-review-questionnaire.controller");
const user_peer_nomination_controller_1 = require("./user-peer-nomination/user-peer-nomination.controller");
const user_review_summary_controller_1 = require("./user-review/user-review-summary/user-review-summary.controller");
let UserControllerModule = class UserControllerModule {
};
exports.UserControllerModule = UserControllerModule;
exports.UserControllerModule = UserControllerModule = __decorate([
    (0, common_1.Module)({
        imports: [user_use_case_module_1.UserUseCaseModule],
        controllers: [
            user_controller_1.UserController,
            user_team_controller_1.UserTeamController,
            user_team_member_controller_1.UserTeamMemberController,
            user_review_controller_1.UserReviewController,
            user_review_questionnaire_controller_1.UserReviewQuestionnaireController,
            user_peer_nomination_controller_1.UserPeerNominationController,
            user_review_summary_controller_1.UserReviewSummaryController,
        ],
    })
], UserControllerModule);
//# sourceMappingURL=user-controller.module.js.map