import { IDataServices } from 'src/core/abstracts';
export declare class TeamUseCaseService {
    private dataServices;
    constructor(dataServices: IDataServices);
    getTeambyId(teamId: number): Promise<{
        members: import("../../core/models/team-member.model").TeamMemberModel[];
        id: number;
        leader: import("../../core/models/user.model").UserModel;
        department: string;
    }>;
}
