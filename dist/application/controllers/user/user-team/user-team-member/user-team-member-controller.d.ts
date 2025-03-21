import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { UserTeamMemberUseCaseService } from 'src/use-cases/user-use-cases/user-team/user-team-member/user-team-member-use-case.service';
export declare class UserTeamMemberController {
    private userTeamMemberUseCaseService;
    constructor(userTeamMemberUseCaseService: UserTeamMemberUseCaseService);
    getMyTeamMembers(query: IPaginationQuery): Promise<import("../../../../../common/interface/response/app-pagination").AppPagination<any>>;
}
