"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_string_1 = require("../../../../common/injectable.string");
const admin_entity_1 = require("../entities/admin.entity");
const appDatabase_provider_1 = require("./appDatabase.provider");
const user_entity_1 = require("../entities/user.entity");
const team_entity_1 = require("../entities/team.entity");
const team_member_entity_1 = require("../entities/team-member.entity");
const review_entity_1 = require("../entities/review.entity");
const peer_nomination_entity_1 = require("../entities/peer-nomination.entity");
const questionnaire_entity_1 = require("../entities/questionnaire.entity");
const question_entity_1 = require("../entities/question.entity");
const nottification_entity_1 = require("../entities/nottification.entity");
const user_notificattion_entity_1 = require("../entities/user-notificattion.entity");
const notification_token_entity_1 = require("../entities/notification-token.entity");
const review_summary_entity_1 = require("../entities/review-summary.entity");
const providers = [
    ...appDatabase_provider_1.appDataSourceProviders,
    {
        provide: admin_entity_1.AdminEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(admin_entity_1.AdminEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: user_entity_1.UserEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(user_entity_1.UserEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: team_entity_1.TeamEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(team_entity_1.TeamEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: team_member_entity_1.TeamMemberEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(team_member_entity_1.TeamMemberEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: review_entity_1.ReviewEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(review_entity_1.ReviewEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: peer_nomination_entity_1.PeerNominationEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(peer_nomination_entity_1.PeerNominationEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: questionnaire_entity_1.QuestionnaireEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(questionnaire_entity_1.QuestionnaireEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: question_entity_1.QuestionEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(question_entity_1.QuestionEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: nottification_entity_1.NotificationEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(nottification_entity_1.NotificationEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: user_notificattion_entity_1.UserNotificationEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(user_notificattion_entity_1.UserNotificationEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: notification_token_entity_1.NotificationTokenEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(notification_token_entity_1.NotificationTokenEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
    {
        provide: review_summary_entity_1.ReviewSummaryEntity.REPOSITORY,
        useFactory: (dataSource) => {
            return dataSource.getRepository(review_summary_entity_1.ReviewSummaryEntity);
        },
        inject: [injectable_string_1.default.APP_DATA_SOURCE],
    },
];
exports.default = providers;
//# sourceMappingURL=index.js.map