import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { IAdminRepository } from 'src/core/abstracts/repositories/admin.abstract';
import { Repository } from 'typeorm';
import { AdminEntity } from '../entities/admin.entity';
import { PgGenericRepository } from '../pg-generic-repository';
export declare class PgAdminRepository extends PgGenericRepository<AdminEntity> implements IAdminRepository<AdminEntity> {
    protected _repository: Repository<AdminEntity>;
    protected cls: IClsStore<AppClsStore>;
    constructor(cls: IClsStore<AppClsStore>, repository: Repository<AdminEntity>);
    deleteById(id: string): Promise<void>;
}
