import { UserTeamUseCaseService } from 'src/use-cases/user-use-cases/user-team/user-team-use-case.service';
export declare class UserTeamController {
    private userTeamUseCaseService;
    constructor(userTeamUseCaseService: UserTeamUseCaseService);
    getMyTeam(): Promise<import("../../../../common/interface/response/app-response").AppResponse<{
        members: import("../../../../core/models/team-member.model").TeamMemberModel[];
        id: number;
        leader: import("../../../../core/models/user.model").UserModel;
        department: string;
    }>>;
}
