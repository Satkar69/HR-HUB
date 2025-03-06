import { Module } from '@nestjs/common';
import { appDataSourceProviders } from './providers/appDatabase.provider';
import { IDataServices } from 'src/core/abstracts';
import { PgDataServices } from './pg-data-services.service';
import providers from './providers';
import { AdminSeeder } from './seeder/admin.seeder';
import { EnvironmentConfigModule } from 'src/application/config/environment-config.module';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';

@Module({
  imports: [EnvironmentConfigModule, ClsServiceModule],
  providers: [
    ...providers,
    {
      provide: IDataServices,
      useClass: PgDataServices,
    },
    // AdminSeeder,
    {
      provide: AdminSeeder,
      useClass: AdminSeeder,
    },
  ],
  exports: [...appDataSourceProviders, IDataServices],
})
export class PgDataServicesModule {}
