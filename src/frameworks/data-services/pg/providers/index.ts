import InjectableString from 'src/common/injectable.string';
import { DataSource } from 'typeorm';
import { AdminEntity } from '../entities/admin.entity';
import { appDataSourceProviders } from './appDatabase.provider';
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

const providers = [
  ...appDataSourceProviders,
  {
    provide: AdminEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(AdminEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: UserEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(UserEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: TeamEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(TeamEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: TeamMemberEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(TeamMemberEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: ReviewEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(ReviewEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: PeerNominationEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(PeerNominationEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: QuestionnaireEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(QuestionnaireEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: QuestionEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(QuestionEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: NotificationEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(NotificationEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: UserNotificationEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(UserNotificationEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: NotificationTokenEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(NotificationTokenEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
  {
    provide: ReviewSummaryEntity.REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(ReviewSummaryEntity);
    },
    inject: [InjectableString.APP_DATA_SOURCE],
  },
];

export default providers;
