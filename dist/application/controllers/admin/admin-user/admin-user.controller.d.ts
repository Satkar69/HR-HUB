import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { AdminUserUseCaseService } from 'src/use-cases/admin-use-cases/admin-user/admin-user-use-case.service';
export declare class AdminUserController {
    private adminUserUseCaseService;
    constructor(adminUserUseCaseService: AdminUserUseCaseService);
    getAllUser(query: IPaginationQuery): Promise<import("../../../../common/interface/response/app-pagination").AppPagination<any>>;
    getUser(userId: number): Promise<import("../../../../common/interface/response/app-response").AppResponse<{
        assignedTeam: import("../../../../core/models/team.model").TeamModel;
        teamMemberships: import("../../../../core/models/team-member.model").TeamMemberModel[];
        id: number;
        fullname: string;
        email: string;
        role: import("../../../../common/enums/user-role.enum").UserRoleEnum;
    }>>;
    getAllEmployeeUser(query: IPaginationQuery): Promise<import("../../../../common/interface/response/app-pagination").AppPagination<any>>;
    getAllNonTeamEmployeeUsers(): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/user.model").UserModel[]>>;
    getAllNonTeamManagerUsers(): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/user.model").UserModel[]>>;
    getAllManagerUser(query: IPaginationQuery): Promise<import("../../../../common/interface/response/app-pagination").AppPagination<any>>;
}
