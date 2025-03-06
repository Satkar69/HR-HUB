import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ConfigService } from '@nestjs/config';

export const getPgConfig = (
  configService: ConfigService,
): PostgresConnectionOptions => ({
  url: configService.get<string>('NEON_PG_DB_URL'),
  type: 'postgres',
  port: 5432,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set this to false in production
});
