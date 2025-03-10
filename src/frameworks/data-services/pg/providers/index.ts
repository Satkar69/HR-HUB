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
  // {
  //   provide: QuestionnaireEntity.REPOSITORY,
  //   useFactory: (dataSource: DataSource) => {
  //     return dataSource.getRepository(QuestionnaireEntity);
  //   },
  //   inject: [InjectableString.APP_DATA_SOURCE],
  // },
];

export default providers;
