import { UserUseCaseService } from 'src/use-cases/user-use-cases/user-use-case-service';
export declare class UserController {
    private userUseCaseService;
    constructor(userUseCaseService: UserUseCaseService);
    getUser(userId: number): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../core/models/user.model").UserModel>>;
}
