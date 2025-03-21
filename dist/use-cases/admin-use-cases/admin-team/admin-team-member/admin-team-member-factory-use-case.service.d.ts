import { CreateTeamMemberDto } from 'src/core/dtos/request/teamMember.dto';
import { TeamMemberModel } from 'src/core/models/team-member.model';
export declare class AdminTeamMemberFactoryUseCaseService {
    createTeamMember(createTeamMemberDto: CreateTeamMemberDto): TeamMemberModel;
}
