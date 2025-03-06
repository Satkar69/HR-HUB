import { HttpException, Logger } from '@nestjs/common';
import { EnvironmentConfigService } from 'src/application/config/environment-config.service';
import InjectableString from 'src/common/injectable.string';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AdminEntity } from '../entities/admin.entity';
import { AdminSeeder } from '../seeder/admin.seeder';

export const appDataSourceProviders = [
  {
    provide: InjectableString.APP_DATA_SOURCE,
    useFactory: async (
      adminSeeder: AdminSeeder,
      config: EnvironmentConfigService,
    ) => {
      try {
        const dataSourceOptions: object = {
          type: 'postgres',
          url: config.getDatabaseMainUrl(),
          database: config.getDatabaseName(),
          synchronize: true,
          entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
        };
        const appDataSource = new DataSource(
          dataSourceOptions as DataSourceOptions,
        );
        await appDataSource.initialize();
        adminSeeder.seed(appDataSource.getRepository(AdminEntity));
        return appDataSource;
      } catch (error) {
        Logger.log(error, 'appDataSourceProviders');
        throw new HttpException(error.message, error.status);
      }
    },
    inject: [AdminSeeder, EnvironmentConfigService],
  },
];
