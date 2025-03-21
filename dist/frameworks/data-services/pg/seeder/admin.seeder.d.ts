import { Repository } from 'typeorm';
import { AdminEntity } from '../entities/admin.entity';
import { EnvironmentConfigService } from 'src/application/config/environment-config.service';
export declare class AdminSeeder {
    private configService;
    constructor(configService: EnvironmentConfigService);
    seed(repository: Repository<AdminEntity>): Promise<void>;
}
