import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IDataServices } from 'src/core/abstracts';
import { AdminTeamMemberFactoryUseCaseService } from './admin-team-member-factory-use-case.service';
import { AddTeamMembersDto } from 'src/core/dtos/request/teamMember.dto';
export declare class AdminTeamMemberUseCaseService {
    private dataServices;
    private adminTeamMemberFactoryUseCaseService;
    constructor(dataServices: IDataServices, adminTeamMemberFactoryUseCaseService: AdminTeamMemberFactoryUseCaseService);
    getTeamMembersByTeam(teamId: number): Promise<IPaginationData>;
    addTeamMember(addTeamMembersDto: AddTeamMembersDto): Promise<import("../../../../core/models/team-member.model").TeamMemberModel[]>;
    removeTeamMember(teamMemberId: number): Promise<any>;
}
