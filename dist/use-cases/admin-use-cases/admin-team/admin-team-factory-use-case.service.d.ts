import { CreateTeamDto, UpdateTeamDto } from 'src/core/dtos/request/team.dto';
import { TeamModel } from 'src/core/models/team.model';
export declare class AdminTeamFactoryUseCaseService {
    createTeam(createTeamDto: CreateTeamDto): TeamModel;
    updateTeam(team: TeamModel, updateTeamDto: UpdateTeamDto): TeamModel;
}
