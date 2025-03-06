import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppDataSourceModule } from './data-services/mgdb/mgdb-datasource.module';
import { RouterModule } from '@nestjs/core';
import { CryptoModule } from './libs/crypto/crypto.module';
import { TokenModule } from './libs/token/token.module';
import { ControllerModule } from './application/controllers/controller.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './application/guards/auth.guard';
import routes from './application/controllers/routes';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AppDataSourceModule,
    RouterModule.register(routes),
    CryptoModule,
    TokenModule,
    ControllerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
