import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IGenericRepository, OtherMethodOptions } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { Repository } from 'typeorm';
export declare class PgGenericRepository<T> implements IGenericRepository<T> {
    protected _repository: Repository<T>;
    protected cls: IClsStore<AppClsStore>;
    constructor(cls: IClsStore<AppClsStore>, repository: Repository<T>);
    getAll(condition: NonNullable<unknown> | any[], relations: NonNullable<unknown>, order: NonNullable<unknown>, select: NonNullable<unknown>): Promise<IPaginationData>;
    getAllWithoutPagination(condition: NonNullable<unknown> | any[], relations: NonNullable<unknown>): Promise<T[]>;
    getOne(condition: any, relations?: NonNullable<unknown> | undefined): Promise<T>;
    getOneOrNull(condition: any, relations?: NonNullable<unknown> | undefined, options?: OtherMethodOptions): Promise<T>;
    create(item: T): Promise<T>;
    createBulk(item: T[]): Promise<T[]>;
    update(condition: NonNullable<unknown>, item: any): Promise<T>;
    updateMany(condition: NonNullable<unknown>, item: any): Promise<T>;
    findOrCreate(condition: NonNullable<unknown>, item: T, relations?: NonNullable<unknown>): Promise<T>;
    createOrUpdate(condition: NonNullable<unknown>, item: any, relations?: NonNullable<unknown>): Promise<T>;
    remove(condition: NonNullable<unknown>, relations?: NonNullable<unknown>): Promise<any>;
    delete(condition: NonNullable<unknown>, relations?: NonNullable<unknown>): Promise<any>;
}
