import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/core/config/database.interface';
import { JWTConfig } from 'src/core/config/jwt.interface';
import { DefaultSuperAdminConfig } from 'src/core/config/superadmin.interface';

/**
 * 
 * can make your service more flexible by using the ConfigService to read environment variables.
 * 
 * environmanet variables reference example
 *DATABASE_PORT=5433
  DATABASE_PORT=23153
  DATABASE_USER="avnadmin"
  DATABASE_PASSWORD="AVNS_NYATV4VLRbcUw4B34E8"
  DATABASE_NAME="pre-ipo"
  DATABASE_SCHEMA="public"
  DATABASE_SYNCHRONIZE="false"
 * 
 */

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
}
