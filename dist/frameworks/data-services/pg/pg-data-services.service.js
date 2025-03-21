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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgDataServices = void 0;
const common_1 = require("@nestjs/common");
const injectable_string_1 = require("../../../common/injectable.string");
const cls_store_abstract_1 = require("../../../core/abstracts/adapters/cls-store.abstract");
const typeorm_1 = require("typeorm");
const admin_entity_1 = require("./entities/admin.entity");
const admin_repository_1 = require("./repositories/admin.repository");
const pg_generic_repository_1 = require("./pg-generic-repository");
const user_entity_1 = require("./entities/user.entity");
const team_entity_1 = require("./entities/team.entity");
const team_member_entity_1 = require("./entities/team-member.entity");
const review_entity_1 = require("./entities/review.entity");
const peer_nomination_entity_1 = require("./entities/peer-nomination.entity");
const questionnaire_entity_1 = require("./entities/questionnaire.entity");
const question_entity_1 = require("./entities/question.entity");
const nottification_entity_1 = require("./entities/nottification.entity");
const user_notificattion_entity_1 = require("./entities/user-notificattion.entity");
const notification_token_entity_1 = require("./entities/notification-token.entity");
const review_summary_entity_1 = require("./entities/review-summary.entity");
let PgDataServices = class PgDataServices {
    constructor(adminRepository, userRepository, teamRepository, teamMemberRepository, reviewRepository, peerNominationRepository, questionnaireRepository, questionRepository, notificationRepository, userNotificationRepository, notificationTokenRepository, reviewSummaryRepository, cls, dataSource) {
        this.adminRepository = adminRepository;
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
        this.teamMemberRepository = teamMemberRepository;
        this.reviewRepository = reviewRepository;
        this.peerNominationRepository = peerNominationRepository;
        this.questionnaireRepository = questionnaireRepository;
        this.questionRepository = questionRepository;
        this.notificationRepository = notificationRepository;
        this.userNotificationRepository = userNotificationRepository;
        this.notificationTokenRepository = notificationTokenRepository;
        this.reviewSummaryRepository = reviewSummaryRepository;
        this.cls = cls;
        this.dataSource = dataSource;
    }
    onApplicationBootstrap() {
        this.admin = new admin_repository_1.PgAdminRepository(this.cls, this.adminRepository);
        this.user = new pg_generic_repository_1.PgGenericRepository(this.cls, this.userRepository);
        this.team = new pg_generic_repository_1.PgGenericRepository(this.cls, this.teamRepository);
        this.teamMember = new pg_generic_repository_1.PgGenericRepository(this.cls, this.teamMemberRepository);
        this.review = new pg_generic_repository_1.PgGenericRepository(this.cls, this.reviewRepository);
        this.peerNomination = new pg_generic_repository_1.PgGenericRepository(this.cls, this.peerNominationRepository);
        this.questionnaire = new pg_generic_repository_1.PgGenericRepository(this.cls, this.questionnaireRepository);
        this.question = new pg_generic_repository_1.PgGenericRepository(this.cls, this.questionRepository);
        this.notification = new pg_generic_repository_1.PgGenericRepository(this.cls, this.notificationRepository);
        this.userNotification = new pg_generic_repository_1.PgGenericRepository(this.cls, this.userNotificationRepository);
        this.notificationToken = new pg_generic_repository_1.PgGenericRepository(this.cls, this.notificationTokenRepository);
        this.reviewSummary = new pg_generic_repository_1.PgGenericRepository(this.cls, this.reviewSummaryRepository);
    }
};
exports.PgDataServices = PgDataServices;
exports.PgDataServices = PgDataServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(admin_entity_1.AdminEntity.REPOSITORY)),
    __param(1, (0, common_1.Inject)(user_entity_1.UserEntity.REPOSITORY)),
    __param(2, (0, common_1.Inject)(team_entity_1.TeamEntity.REPOSITORY)),
    __param(3, (0, common_1.Inject)(team_member_entity_1.TeamMemberEntity.REPOSITORY)),
    __param(4, (0, common_1.Inject)(review_entity_1.ReviewEntity.REPOSITORY)),
    __param(5, (0, common_1.Inject)(peer_nomination_entity_1.PeerNominationEntity.REPOSITORY)),
    __param(6, (0, common_1.Inject)(questionnaire_entity_1.QuestionnaireEntity.REPOSITORY)),
    __param(7, (0, common_1.Inject)(question_entity_1.QuestionEntity.REPOSITORY)),
    __param(8, (0, common_1.Inject)(nottification_entity_1.NotificationEntity.REPOSITORY)),
    __param(9, (0, common_1.Inject)(user_notificattion_entity_1.UserNotificationEntity.REPOSITORY)),
    __param(10, (0, common_1.Inject)(notification_token_entity_1.NotificationTokenEntity.REPOSITORY)),
    __param(11, (0, common_1.Inject)(review_summary_entity_1.ReviewSummaryEntity.REPOSITORY)),
    __param(13, (0, common_1.Inject)(injectable_string_1.default.APP_DATA_SOURCE)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        cls_store_abstract_1.IClsStore,
        typeorm_1.DataSource])
], PgDataServices);
//# sourceMappingURL=pg-data-services.service.js.map