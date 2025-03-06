import { Module } from '@nestjs/common';
import {
  APP_FILTER,
  APP_GUARD,
  APP_INTERCEPTOR,
  RouterModule,
} from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ClsGuard } from 'nestjs-cls';
import { EnvironmentConfigModule } from './application/config/environment-config.module';
import { ControllerModule } from './application/controllers/controller.module';
import routes from './application/controllers/routes';
import { HttpExceptionFilter } from './application/filters/http-exception.filter';
import { AdminGuard } from './application/guards/admin.guard';
import { AuthGuard } from './application/guards/auth.guard';
import { HttpLoggingInterceptor } from './application/interceptors/http-logging.interceptor';
import { ResponseInterceptor } from './application/interceptors/response.interceptor';
import { ClsServiceModule } from './libs/cls-store/cls-store.module';
import { DataServicesModule } from './services/data-services/data-services.module';
import { JwtServiceModule } from './libs/jwt/jwt.module';
import { join } from 'path';
@Module({
  imports: [
    ClsServiceModule,
    JwtServiceModule,
    EventEmitterModule.forRoot({}),
    EnvironmentConfigModule,
    DataServicesModule,
    // routes
    RouterModule.register(routes),
    // controller modules
    ControllerModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ClsGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpLoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AdminGuard,
    },
  ],
})
export class AppModule {}
