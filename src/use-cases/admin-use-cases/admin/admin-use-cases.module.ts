import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { AdminFactoryService } from './admin-factory.service';
import { AdminUseCaseService } from './admin-use-case.service';
import { AdminAuthUseCaseService } from './admin-auth-use-case.service';
import { BcryptModule } from 'src/libs/bcrypt/bcrypt.module';
import { JwtServiceModule } from 'src/libs/jwt/jwt.module';

@Module({
  imports: [DataServicesModule, BcryptModule, JwtServiceModule],
  providers: [
    AdminFactoryService,
    AdminUseCaseService,
    AdminAuthUseCaseService,
  ],
  exports: [AdminFactoryService, AdminUseCaseService, AdminAuthUseCaseService],
})
export class AdminFeatUseCaseModule {}
