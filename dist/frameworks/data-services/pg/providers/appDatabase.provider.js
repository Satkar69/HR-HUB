"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSourceProviders = void 0;
const common_1 = require("@nestjs/common");
const environment_config_service_1 = require("../../../../application/config/environment-config.service");
const injectable_string_1 = require("../../../../common/injectable.string");
const typeorm_1 = require("typeorm");
const admin_entity_1 = require("../entities/admin.entity");
const admin_seeder_1 = require("../seeder/admin.seeder");
const question_seeder_1 = require("../seeder/question.seeder");
const question_entity_1 = require("../entities/question.entity");
exports.appDataSourceProviders = [
    {
        provide: injectable_string_1.default.APP_DATA_SOURCE,
        useFactory: async (adminSeeder, questionSeeder, config) => {
            try {
                const dataSourceOptions = {
                    type: 'postgres',
                    url: config.getDatabaseMainUrl(),
                    database: config.getDatabaseName(),
                    synchronize: true,
                    entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
                };
                const appDataSource = new typeorm_1.DataSource(dataSourceOptions);
                await appDataSource.initialize();
                adminSeeder.seed(appDataSource.getRepository(admin_entity_1.AdminEntity));
                questionSeeder.seed(appDataSource.getRepository(question_entity_1.QuestionEntity));
                return appDataSource;
            }
            catch (error) {
                common_1.Logger.log(error, 'appDataSourceProviders');
                throw new common_1.HttpException(error.message, error.status);
            }
        },
        inject: [admin_seeder_1.AdminSeeder, question_seeder_1.QuestionSeeder, environment_config_service_1.EnvironmentConfigService],
    },
];
//# sourceMappingURL=appDatabase.provider.js.map