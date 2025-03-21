import { IDataServices } from 'src/core/abstracts';
import { CreateUserDto } from 'src/core/dtos/request/user.dto';
import { UserModel } from 'src/core/models/user.model';
import { AdminUserFactoryUseCaseService } from './admin-user-factory-use-case.service';
import { IBcryptService } from 'src/core/abstracts/adapters/bcrypt.abstract';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';
export declare class AdminUserUseCaseService {
    private dataServices;
    private adminUserFactoryUseCaseService;
    private readonly bcryptService;
    constructor(dataServices: IDataServices, adminUserFactoryUseCaseService: AdminUserFactoryUseCaseService, bcryptService: IBcryptService);
    createUser(createUserDto: CreateUserDto): Promise<UserModel>;
    getUserById(userId: number): Promise<{
        assignedTeam: import("../../../core/models/team.model").TeamModel;
        teamMemberships: import("../../../core/models/team-member.model").TeamMemberModel[];
        id: number;
        fullname: string;
        email: string;
        role: UserRoleEnum;
    }>;
    getAllNonTeamEmployees(): Promise<UserModel[]>;
    getAllNonTeamManagers(): Promise<UserModel[]>;
    getAllUser(): Promise<IPaginationData>;
    getAllEmployees(): Promise<IPaginationData>;
    getAllManagers(): Promise<IPaginationData>;
}
