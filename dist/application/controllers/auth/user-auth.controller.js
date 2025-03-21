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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_cls_1 = require("nestjs-cls");
const core_api_response_1 = require("../../api/core-api-response");
const public_decorator_1 = require("../../decorators/public.decorator");
const user_decorator_1 = require("../../decorators/user.decorator");
const signin_dto_1 = require("../../../core/dtos/request/signin.dto");
const user_auth_use_case_service_1 = require("../../../use-cases/user-use-cases/user-auth/user-auth-use-case-service");
let UserAuthController = class UserAuthController {
    constructor(userAuthUseCaseService, cls) {
        this.userAuthUseCaseService = userAuthUseCaseService;
        this.cls = cls;
    }
    async signin(signinDto) {
        return core_api_response_1.CoreApiResponse.success(await this.userAuthUseCaseService.signin(signinDto), 200, 'Signin successful');
    }
    async me() {
        return core_api_response_1.CoreApiResponse.success(this.cls.get('user'));
    }
};
exports.UserAuthController = UserAuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.SigninDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "signin", null);
__decorate([
    (0, user_decorator_1.User)(),
    (0, common_1.Get)('/me'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "me", null);
exports.UserAuthController = UserAuthController = __decorate([
    (0, common_1.Controller)('/user'),
    __metadata("design:paramtypes", [user_auth_use_case_service_1.UserAuthUseCaseService,
        nestjs_cls_1.ClsService])
], UserAuthController);
//# sourceMappingURL=user-auth.controller.js.map