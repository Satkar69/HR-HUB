import { IDataServices } from 'src/core/abstracts';
import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
import { AdminTeamFactoryUseCaseService } from './admin-team-factory-use-case.service';
import { AdminTeamMemberFactoryUseCaseService } from './admin-team-member/admin-team-member-factory-use-case.service';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
export declare class AdminTeamUseCaseService {
    private dataServices;
    private adminTeamFactoryUseCaseService;
    private adminTeamMemberFactoryUseCaseService;
    constructor(dataServices: IDataServices, adminTeamFactoryUseCaseService: AdminTeamFactoryUseCaseService, adminTeamMemberFactoryUseCaseService: AdminTeamMemberFactoryUseCaseService);
    getAllTeams(): Promise<IPaginationData>;
    createTeam(createTeamDto: CreateTeamDto): Promise<import("../../../core/models/team.model").TeamModel>;
    updateTeam(teamId: number, updateTeamDto: UpdateTeamDto): Promise<import("../../../core/models/team.model").TeamModel>;
    deleteTeam(teamId: number): Promise<any>;
}
