import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { IJwtService } from 'src/core/abstracts/adapters/jwt.interface';
export declare class AuthGuard implements CanActivate {
    private _jwtService;
    private _reflector;
    private readonly cls;
    constructor(_jwtService: IJwtService, _reflector: Reflector, cls: IClsStore<AppClsStore>);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
