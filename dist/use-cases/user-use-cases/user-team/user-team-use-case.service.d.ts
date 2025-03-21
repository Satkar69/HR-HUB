import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
export declare class UserTeamUseCaseService {
    private dataServices;
    private readonly cls;
    constructor(dataServices: IDataServices, cls: IClsStore<AppClsStore>);
    getMyTeam(): Promise<{
        members: import("../../../core/models/team-member.model").TeamMemberModel[];
        id: number;
        leader: import("../../../core/models/user.model").UserModel;
        department: string;
    }>;
}
