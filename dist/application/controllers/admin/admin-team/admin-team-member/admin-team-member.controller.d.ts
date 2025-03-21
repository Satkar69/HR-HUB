import { AdminTeamMemberUseCaseService } from 'src/use-cases/admin-use-cases/admin-team/admin-team-member/admin-team-member-use-case.service';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { AddTeamMembersDto } from 'src/core/dtos/request/teamMember.dto';
export declare class AdminTeamMemberController {
    private adminTeamMemberUseCaseService;
    constructor(adminTeamMemberUseCaseService: AdminTeamMemberUseCaseService);
    getAllTeamMembers(teamId: number, query: IPaginationQuery): Promise<import("../../../../../common/interface/response/app-pagination").AppPagination<any>>;
    createTeamMember(addTeamMembersDto: AddTeamMembersDto): Promise<import("../../../../../common/interface/response/app-response").AppResponse<import("../../../../../core/models/team-member.model").TeamMemberModel[]>>;
    deleteTeamMember(teamMemberId: number): Promise<import("../../../../../common/interface/response/app-response").AppResponse<any>>;
}
