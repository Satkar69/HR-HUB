import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
export declare class UserTeamMemberUseCaseService {
    private dataServices;
    private readonly cls;
    constructor(dataServices: IDataServices, cls: IClsStore<AppClsStore>);
    getMyTeamMembers(): Promise<IPaginationData>;
}
