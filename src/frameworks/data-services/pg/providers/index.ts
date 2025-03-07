import InjectableString from 'src/common/injectable.string';
import { DataSource } from 'typeorm';
import { AdminEntity } from '../entities/admin.entity';
import { appDataSourceProviders } from './appDatabase.provider';
import { UserEntity } from '../entities/user.entity';

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
];

export default providers;
