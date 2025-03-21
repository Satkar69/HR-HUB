import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/core/config/database.interface';
import { JWTConfig } from 'src/core/config/jwt.interface';
import { DefaultSuperAdminConfig } from 'src/core/config/superadmin.interface';
export declare class EnvironmentConfigService implements JWTConfig, DefaultSuperAdminConfig, DatabaseConfig {
    private configService;
    constructor(configService: ConfigService);
    getJwtSecret(): string;
    getJwtExpirationTime(): string;
    getJwtRefreshSecret(): string;
    getJwtRefreshExpirationTime(): string;
    getDefaultAdminName(): string;
    getDefaultAdminLastName(): string;
    getDefaultAdminEmail(): string;
    getDefaultAdminPassword(): string;
    getDatabaseName(): string;
    getDatabaseMainUrl(): string;
    getDatabaseDevUrl(): string;
    getDatabaseUrl(): string;
}
