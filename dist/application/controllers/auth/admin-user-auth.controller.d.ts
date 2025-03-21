import { CreateUserDto } from 'src/core/dtos/request/user.dto';
import { AdminUserUseCaseService } from 'src/use-cases/admin-use-cases/admin-user/admin-user-use-case.service';
export declare class AdminUserAuthController {
    private adminUserUseCaseService;
    constructor(adminUserUseCaseService: AdminUserUseCaseService);
    signup(createUserDto: CreateUserDto): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../core/models/user.model").UserModel>>;
}
