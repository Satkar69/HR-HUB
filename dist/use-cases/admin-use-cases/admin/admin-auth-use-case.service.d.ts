import { IDataServices } from 'src/core/abstracts';
import { IBcryptService } from 'src/core/abstracts/adapters/bcrypt.abstract';
import { IJwtService } from 'src/core/abstracts/adapters/jwt.interface';
import { CheckTokenDto, SigninDto } from 'src/core/dtos/request/signin.dto';
import { AdminModel } from 'src/core/models';
import { AdminSignInResponseType } from './types/admin-signin-response';
export declare class AdminAuthUseCaseService {
    private dataServices;
    private readonly _jwtService;
    private readonly bcryptService;
    constructor(dataServices: IDataServices, _jwtService: IJwtService, bcryptService: IBcryptService);
    getAdminByEmail(email: string): Promise<AdminModel>;
    signin(signinDto: SigninDto): Promise<AdminSignInResponseType>;
    isValidToken(dto: CheckTokenDto): Promise<any>;
}
