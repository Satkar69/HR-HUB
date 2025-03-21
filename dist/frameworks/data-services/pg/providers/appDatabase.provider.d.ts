import { EnvironmentConfigService } from 'src/application/config/environment-config.service';
import { DataSource } from 'typeorm';
import { AdminSeeder } from '../seeder/admin.seeder';
import { QuestionSeeder } from '../seeder/question.seeder';
export declare const appDataSourceProviders: {
    provide: string;
    useFactory: (adminSeeder: AdminSeeder, questionSeeder: QuestionSeeder, config: EnvironmentConfigService) => Promise<DataSource>;
    inject: (typeof EnvironmentConfigService | typeof AdminSeeder | typeof QuestionSeeder)[];
}[];
