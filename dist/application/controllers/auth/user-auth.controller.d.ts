import { ClsService } from 'nestjs-cls';
import { AppClsStore, UserClsData } from 'src/common/interface/app-cls-store.interface';
import { SigninDto } from 'src/core/dtos/request/signin.dto';
import { UserAuthUseCaseService } from 'src/use-cases/user-use-cases/user-auth/user-auth-use-case-service';
export declare class UserAuthController {
    private readonly userAuthUseCaseService;
    private readonly cls;
    constructor(userAuthUseCaseService: UserAuthUseCaseService, cls: ClsService<AppClsStore>);
    signin(signinDto: SigninDto): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../use-cases/user-use-cases/user-auth/types/user-signin-response").UserSignInResponseType>>;
    me(): Promise<import("../../../common/interface/response/app-response").AppResponse<UserClsData>>;
}
