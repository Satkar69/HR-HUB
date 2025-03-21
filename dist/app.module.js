"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const event_emitter_1 = require("@nestjs/event-emitter");
const nestjs_cls_1 = require("nestjs-cls");
const environment_config_module_1 = require("./application/config/environment-config.module");
const controller_module_1 = require("./application/controllers/controller.module");
const routes_1 = require("./application/controllers/routes");
const http_exception_filter_1 = require("./application/filters/http-exception.filter");
const admin_guard_1 = require("./application/guards/admin.guard");
const user_guard_1 = require("./application/guards/user.guard");
const auth_guard_1 = require("./application/guards/auth.guard");
const http_logging_interceptor_1 = require("./application/interceptors/http-logging.interceptor");
const response_interceptor_1 = require("./application/interceptors/response.interceptor");
const cls_store_module_1 = require("./libs/cls-store/cls-store.module");
const data_services_module_1 = require("./services/data-services/data-services.module");
const jwt_module_1 = require("./libs/jwt/jwt.module");
const manager_guard_1 = require("./application/guards/manager.guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cls_store_module_1.ClsServiceModule,
            jwt_module_1.JwtServiceModule,
            event_emitter_1.EventEmitterModule.forRoot({}),
            environment_config_module_1.EnvironmentConfigModule,
            data_services_module_1.DataServicesModule,
            core_1.RouterModule.register(routes_1.default),
            controller_module_1.ControllerModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: nestjs_cls_1.ClsGuard,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: http_logging_interceptor_1.HttpLoggingInterceptor,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: response_interceptor_1.ResponseInterceptor,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.HttpExceptionFilter,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: admin_guard_1.AdminGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: user_guard_1.UserGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: manager_guard_1.ManagerGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map