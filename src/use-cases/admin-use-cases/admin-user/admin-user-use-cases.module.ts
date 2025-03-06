import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { AdminUserFactoryService } from './admin-user-factory.service';
import { AdminUserUseCaseService } from './admin-user-use-case.service';
import { AdminUserAuthUseCaseService } from './admin-user-auth-use-case.service';
import { BcryptModule } from 'src/libs/bcrypt/bcrypt.module';
import { JwtServiceModule } from 'src/libs/jwt/jwt.module';

@Module({
  imports: [DataServicesModule, BcryptModule, JwtServiceModule],
  providers: [
    AdminUserFactoryService,
    AdminUserUseCaseService,
    AdminUserAuthUseCaseService,
  ],
  exports: [
    AdminUserFactoryService,
    AdminUserUseCaseService,
    AdminUserAuthUseCaseService,
  ],
})
export class AdminUserUseCasesModule {}
