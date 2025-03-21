import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
export declare class UserNotificationUseCaseService {
    private dataServices;
    private readonly cls;
    constructor(dataServices: IDataServices, cls: IClsStore<AppClsStore>);
}
