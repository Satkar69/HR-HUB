import { IGenericRepository } from '../generic-repository.abstract';
export declare abstract class IAdminRepository<T> extends IGenericRepository<T> {
    abstract deleteById(id: string): Promise<void>;
}
