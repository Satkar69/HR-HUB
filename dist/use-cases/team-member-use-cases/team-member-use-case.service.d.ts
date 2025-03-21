import { IDataServices } from 'src/core/abstracts';
export declare class TeamMemberUseCaseService {
    private dataServices;
    constructor(dataServices: IDataServices);
    getTeamMemberbyId(teamMemberId: number): Promise<import("../../core/models/team-member.model").TeamMemberModel>;
}
