import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/core/config/database.interface';
import { JWTConfig } from 'src/core/config/jwt.interface';
import { DefaultSuperAdminConfig } from 'src/core/config/superadmin.interface';

@Injectable()
export class EnvironmentConfigService
  implements JWTConfig, DefaultSuperAdminConfig, DatabaseConfig
{
  constructor(private configService: ConfigService) {}

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRATION_TIME');
  }

  getJwtRefreshSecret(): string {
    return this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET');
  }

  getJwtRefreshExpirationTime(): string {
    return this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME');
  }

  getDefaultAdminName(): string {
    return this.configService.get<string>('ADMIN_NAME');
  }

  getDefaultAdminLastName(): string {
    return this.configService.get<string>('ADMIN_LAST_NAME');
  }

  getDefaultAdminEmail(): string {
    return this.configService.get<string>('ADMIN_EMAIL');
  }

  getDefaultAdminPassword(): string {
    return this.configService.get<string>('ADMIN_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DB_NAME');
  }

  getDatabaseMainUrl(): string {
    return this.configService.get<string>('DB_URL_MAIN');
  }

  getDatabaseDevUrl(): string {
    return this.configService.get<string>('DB_URL_DEV');
  }

  getDatabaseUrl(): string {
    return this.configService.get<string>('DATABASE_URL');
  }
}
