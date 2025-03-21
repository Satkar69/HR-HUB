import { CanActivate } from '@nestjs/common';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
export declare class UserGuard implements CanActivate {
    private readonly cls;
    private readonly dataServices;
    constructor(cls: IClsStore<AppClsStore>, dataServices: IDataServices);
    canActivate(): Promise<boolean>;
}
