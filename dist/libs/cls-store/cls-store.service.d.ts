import { ClsService } from 'nestjs-cls';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
export declare class ClsStoreService implements IClsStore<AppClsStore> {
    private readonly cls;
    constructor(cls: ClsService<AppClsStore>);
    get<T>(key: keyof AppClsStore): T | undefined;
    set<T>(key: keyof AppClsStore, value: T): void;
}
