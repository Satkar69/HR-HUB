import { ClsService } from 'nestjs-cls';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { CheckTokenDto, SigninDto } from 'src/core/dtos/request/signin.dto';
import { AdminEntity } from 'src/frameworks/data-services/pg/entities/admin.entity';
import { AdminAuthUseCaseService } from 'src/use-cases/admin-use-cases/admin/admin-auth-use-case.service';
export declare class AdminAuthController {
    private adminAuthUseCaseService;
    private readonly cls;
    constructor(adminAuthUseCaseService: AdminAuthUseCaseService, cls: ClsService<AppClsStore>);
    signin(signinDto: SigninDto): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../use-cases/admin-use-cases/admin/types/admin-signin-response").AdminSignInResponseType>>;
    isValidToken(dto: CheckTokenDto): Promise<import("../../../common/interface/response/app-response").AppResponse<any>>;
    me(): Promise<import("../../../common/interface/response/app-response").AppResponse<AdminEntity>>;
}
