"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgDataServicesModule = void 0;
const common_1 = require("@nestjs/common");
const appDatabase_provider_1 = require("./providers/appDatabase.provider");
const abstracts_1 = require("../../../core/abstracts");
const pg_data_services_service_1 = require("./pg-data-services.service");
const providers_1 = require("./providers");
const admin_seeder_1 = require("./seeder/admin.seeder");
const environment_config_module_1 = require("../../../application/config/environment-config.module");
const cls_store_module_1 = require("../../../libs/cls-store/cls-store.module");
const question_seeder_1 = require("./seeder/question.seeder");
let PgDataServicesModule = class PgDataServicesModule {
};
exports.PgDataServicesModule = PgDataServicesModule;
exports.PgDataServicesModule = PgDataServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [environment_config_module_1.EnvironmentConfigModule, cls_store_module_1.ClsServiceModule],
        providers: [
            ...providers_1.default,
            {
                provide: abstracts_1.IDataServices,
                useClass: pg_data_services_service_1.PgDataServices,
            },
            {
                provide: admin_seeder_1.AdminSeeder,
                useClass: admin_seeder_1.AdminSeeder,
            },
            {
                provide: question_seeder_1.QuestionSeeder,
                useClass: question_seeder_1.QuestionSeeder,
            },
        ],
        exports: [...appDatabase_provider_1.appDataSourceProviders, abstracts_1.IDataServices],
    })
], PgDataServicesModule);
//# sourceMappingURL=pg-data-services.module.js.map