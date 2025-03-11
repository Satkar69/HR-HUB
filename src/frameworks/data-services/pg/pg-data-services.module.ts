import { Module } from '@nestjs/common';
import { appDataSourceProviders } from './providers/appDatabase.provider';
import { IDataServices } from 'src/core/abstracts';
import { PgDataServices } from './pg-data-services.service';
import providers from './providers';
import { AdminSeeder } from './seeder/admin.seeder';
import { EnvironmentConfigModule } from 'src/application/config/environment-config.module';
import { ClsServiceModule } from 'src/libs/cls-store/cls-store.module';
import { QuestionSeeder } from './seeder/question.seeder';

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
    {
      provide: QuestionSeeder,
      useClass: QuestionSeeder,
    },
  ],
  exports: [...appDataSourceProviders, IDataServices],
})
export class PgDataServicesModule {}
