import { Module } from '@nestjs/common';
import { BcryptModule } from 'src/libs/bcrypt/bcrypt.module';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { JwtServiceModule } from 'src/libs/jwt/jwt.module';
import { AdminUserFactoryUseCaseService } from './admin-user-factory-use-case.service';
import { AdminUserUseCaseService } from './admin-user-use-case.service';

@Module({
  imports: [DataServicesModule, BcryptModule, JwtServiceModule],
  providers: [AdminUserFactoryUseCaseService, AdminUserUseCaseService],
  exports: [AdminUserFactoryUseCaseService, AdminUserUseCaseService],
})
export class AdminUserUseCaseModule {}
