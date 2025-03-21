import { DataSource } from 'typeorm';
import { AdminEntity } from '../entities/admin.entity';
import { UserEntity } from '../entities/user.entity';
import { TeamEntity } from '../entities/team.entity';
import { TeamMemberEntity } from '../entities/team-member.entity';
import { ReviewEntity } from '../entities/review.entity';
import { PeerNominationEntity } from '../entities/peer-nomination.entity';
import { QuestionnaireEntity } from '../entities/questionnaire.entity';
import { QuestionEntity } from '../entities/question.entity';
import { NotificationEntity } from '../entities/nottification.entity';
import { UserNotificationEntity } from '../entities/user-notificattion.entity';
import { NotificationTokenEntity } from '../entities/notification-token.entity';
import { ReviewSummaryEntity } from '../entities/review-summary.entity';
declare const providers: ({
    provide: string;
    useFactory: (adminSeeder: import("../seeder/admin.seeder").AdminSeeder, questionSeeder: import("../seeder/question.seeder").QuestionSeeder, config: import("../../../../application/config/environment-config.service").EnvironmentConfigService) => Promise<DataSource>;
    inject: (typeof import("../seeder/admin.seeder").AdminSeeder | typeof import("../seeder/question.seeder").QuestionSeeder | typeof import("../../../../application/config/environment-config.service").EnvironmentConfigService)[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<AdminEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<UserEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<TeamEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<TeamMemberEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ReviewEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<PeerNominationEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<QuestionnaireEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<QuestionEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<NotificationEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<UserNotificationEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<NotificationTokenEntity>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ReviewSummaryEntity>;
    inject: string[];
})[];
export default providers;
