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
exports.AdminAuthUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const app_exception_1 = require("../../../application/exception/app.exception");
const abstracts_1 = require("../../../core/abstracts");
const bcrypt_abstract_1 = require("../../../core/abstracts/adapters/bcrypt.abstract");
const jwt_interface_1 = require("../../../core/abstracts/adapters/jwt.interface");
let AdminAuthUseCaseService = class AdminAuthUseCaseService {
    constructor(dataServices, _jwtService, bcryptService) {
        this.dataServices = dataServices;
        this._jwtService = _jwtService;
        this.bcryptService = bcryptService;
    }
    async getAdminByEmail(email) {
        return await this.dataServices.admin.getOne({
            email,
        });
    }
    async signin(signinDto) {
        const adminUser = await this.dataServices.admin.getOneOrNull({
            email: signinDto.email,
        });
        if (!adminUser) {
            throw new app_exception_1.default({}, 'Incorrect Email or Password', 400);
        }
        if (adminUser &&
            !(await this.bcryptService.compare(signinDto.password, adminUser.password))) {
            throw new app_exception_1.default({}, 'Incorrect Email or Password', 400);
        }
        const payload = { sub: adminUser.email };
        const accessToken = await this._jwtService.createToken(payload);
        return { accessToken, user: adminUser };
    }
    async isValidToken(dto) {
        return await this._jwtService.checkToken(dto.token);
    }
};
exports.AdminAuthUseCaseService = AdminAuthUseCaseService;
exports.AdminAuthUseCaseService = AdminAuthUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        jwt_interface_1.IJwtService,
        bcrypt_abstract_1.IBcryptService])
], AdminAuthUseCaseService);
//# sourceMappingURL=admin-auth-use-case.service.js.map