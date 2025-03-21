"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const cls_store_abstract_1 = require("../../core/abstracts/adapters/cls-store.abstract");
const jwt_interface_1 = require("../../core/abstracts/adapters/jwt.interface");
const admin_decorator_1 = require("../decorators/admin.decorator");
const public_decorator_1 = require("../decorators/public.decorator");
const app_unauthorized_exception_1 = require("../exception/app-unauthorized.exception");
const user_decorator_1 = require("../decorators/user.decorator");
const manager_decorator_1 = require("../decorators/manager.decorator");
let AuthGuard = class AuthGuard {
    constructor(_jwtService, _reflector, cls) {
        this._jwtService = _jwtService;
        this._reflector = _reflector;
        this.cls = cls;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { url: requestUrl } = request;
        const isPublic = this._reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]) || requestUrl.startsWith('/api/hr-hub/public')
            ? true
            : false;
        if (isPublic) {
            this.cls.set('isPublic', true);
            return true;
        }
        const isAdmin = this._reflector.getAllAndOverride(admin_decorator_1.IS_ADMIN_KEY, [
            context.getHandler(),
            context.getClass(),
        ]) || requestUrl.startsWith('/api/hr-hub/admin')
            ? true
            : false;
        const isUser = this._reflector.getAllAndOverride(user_decorator_1.IS_USER_KEY, [
            context.getHandler(),
            context.getClass(),
        ]) || requestUrl.startsWith('/api/hr-hub/user')
            ? true
            : false;
        const isManager = this._reflector.getAllAndOverride(manager_decorator_1.IS_MANAGER_KEY, [context.getHandler(), context.getClass()])
            ? true
            : false;
        this.cls.set('isPublic', isPublic);
        this.cls.set('isAdmin', isAdmin);
        this.cls.set('isUser', isUser);
        this.cls.set('isManager', isManager);
        if (isPublic) {
            return true;
        }
        if (isAdmin || isUser) {
            const token = this.extractTokenFromHeader(request);
            if (!token || token === 'null' || token === 'undefined') {
                throw new app_unauthorized_exception_1.default('Invalid token. Please login again.');
            }
            else {
                try {
                    const payload = await this._jwtService.checkToken(token.trim());
                    if (!payload) {
                        throw new app_unauthorized_exception_1.default('Invalid token. Please login again.');
                    }
                    this.cls.set('payload', payload);
                    return true;
                }
                catch (error) {
                    throw new app_unauthorized_exception_1.default(JSON.stringify(error));
                }
            }
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_interface_1.IJwtService,
        core_1.Reflector,
        cls_store_abstract_1.IClsStore])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map