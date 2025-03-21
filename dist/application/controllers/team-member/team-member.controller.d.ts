import { TeamMemberUseCaseService } from 'src/use-cases/team-member-use-cases/team-member-use-case.service';
export declare class TeamMemberController {
    private teamMemberUseCaseService;
    constructor(teamMemberUseCaseService: TeamMemberUseCaseService);
    getTeamMember(teamMemberId: number): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../core/models/team-member.model").TeamMemberModel>>;
}
