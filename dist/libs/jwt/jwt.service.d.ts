import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/common/interface/jwt-playload.interface';
import { IJwtService } from 'src/core/abstracts/adapters/jwt.interface';
export declare class JwtTokenService implements IJwtService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    checkToken(token: string): Promise<any>;
    createToken(payload: JwtPayload): Promise<string>;
    createResetPasswordToken(payload: any): Promise<string>;
}
