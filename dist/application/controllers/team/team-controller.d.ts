import { TeamUseCaseService } from 'src/use-cases/team-use-cases/team-use-case.service';
export declare class TeamController {
    private teamUseCaseService;
    constructor(teamUseCaseService: TeamUseCaseService);
    getTeam(teamId: number): Promise<import("../../../common/interface/response/app-response").AppResponse<{
        members: import("../../../core/models/team-member.model").TeamMemberModel[];
        id: number;
        leader: import("../../../core/models/user.model").UserModel;
        department: string;
    }>>;
}
