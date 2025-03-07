import { Module } from '@nestjs/common';
import { UserAuthUseCaseService } from './user-auth-use-case-service';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { BcryptModule } from 'src/libs/bcrypt/bcrypt.module';
import { JwtServiceModule } from 'src/libs/jwt/jwt.module';

@Module({
  imports: [DataServicesModule, BcryptModule, JwtServiceModule],
  providers: [UserAuthUseCaseService],
  exports: [UserAuthUseCaseService],
})
export class UserAuthUseCaseModule {}
