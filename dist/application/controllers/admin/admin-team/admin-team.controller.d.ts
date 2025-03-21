import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
import { AdminTeamUseCaseService } from 'src/use-cases/admin-use-cases/admin-team/admin-team-use-case.service';
export declare class AdminTeamController {
    private adminTeamUseCaseService;
    constructor(adminTeamUseCaseService: AdminTeamUseCaseService);
    createTeam(createTeamDto: CreateTeamDto): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/team.model").TeamModel>>;
    getAllTeams(query: IPaginationQuery): Promise<import("../../../../common/interface/response/app-pagination").AppPagination<any>>;
    updateTeam(teamId: number, updateTeamDto: UpdateTeamDto): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/team.model").TeamModel>>;
    deleteTeam(teamId: number): Promise<import("../../../../common/interface/response/app-response").AppResponse<any>>;
}
