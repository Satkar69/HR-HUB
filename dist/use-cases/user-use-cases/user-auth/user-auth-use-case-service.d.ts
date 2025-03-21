import { IDataServices } from 'src/core/abstracts';
import { IBcryptService } from 'src/core/abstracts/adapters/bcrypt.abstract';
import { IJwtService } from 'src/core/abstracts/adapters/jwt.interface';
import { CheckTokenDto, SigninDto } from 'src/core/dtos/request/signin.dto';
import { UserSignInResponseType } from './types/user-signin-response';
import { UserModel } from 'src/core/models/user.model';
export declare class UserAuthUseCaseService {
    private dataServices;
    private readonly _jwtService;
    private readonly bcryptService;
    constructor(dataServices: IDataServices, _jwtService: IJwtService, bcryptService: IBcryptService);
    getUserByEmail(email: string): Promise<UserModel>;
    signin(signinDto: SigninDto): Promise<UserSignInResponseType>;
    isValidToken(dto: CheckTokenDto): Promise<any>;
}
