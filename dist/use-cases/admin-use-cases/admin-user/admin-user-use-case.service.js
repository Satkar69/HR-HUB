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
exports.AdminUserUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const app_exception_1 = require("../../../application/exception/app.exception");
const abstracts_1 = require("../../../core/abstracts");
const admin_user_factory_use_case_service_1 = require("./admin-user-factory-use-case.service");
const bcrypt_abstract_1 = require("../../../core/abstracts/adapters/bcrypt.abstract");
const user_role_enum_1 = require("../../../common/enums/user-role.enum");
let AdminUserUseCaseService = class AdminUserUseCaseService {
    constructor(dataServices, adminUserFactoryUseCaseService, bcryptService) {
        this.dataServices = dataServices;
        this.adminUserFactoryUseCaseService = adminUserFactoryUseCaseService;
        this.bcryptService = bcryptService;
    }
    async createUser(createUserDto) {
        const user = this.adminUserFactoryUseCaseService.createUser(createUserDto);
        const oldUser = await this.dataServices.user.getOneOrNull({
            email: createUserDto.email,
        });
        if (oldUser) {
            throw new app_exception_1.default({ email: `${createUserDto.email} already exists` }, 'Email already exists', 409);
        }
        user.password = await this.bcryptService.hash(user.password);
        return await this.dataServices.user.create(user);
    }
    async getUserById(userId) {
        const assignedTeam = await this.dataServices.team.getOneOrNull({
            leader: { id: userId },
        });
        const teamMemberships = await this.dataServices.teamMember.getAllWithoutPagination({
            member: { id: userId },
        });
        const user = await this.dataServices.user.getOne({ id: userId });
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            assignedTeam,
            teamMemberships,
        };
    }
    async getAllNonTeamEmployees() {
        const assignedEmployees = await this.dataServices.teamMember.getAllWithoutPagination();
        const employees = await this.dataServices.user.getAllWithoutPagination({
            role: user_role_enum_1.UserRoleEnum.EMPLOYEE,
        });
        const nonAssignedEmployees = employees.filter((employee) => {
            return !assignedEmployees.some((assignedEmployee) => assignedEmployee.member.id === employee.id);
        });
        return nonAssignedEmployees;
    }
    async getAllNonTeamManagers() {
        const teams = await this.dataServices.team.getAllWithoutPagination();
        const managers = await this.dataServices.user.getAllWithoutPagination({
            role: user_role_enum_1.UserRoleEnum.MANAGER,
        });
        const nonAssignedManagers = managers.filter((manager) => {
            return !teams.some((team) => team.leader.id === manager.id);
        });
        return nonAssignedManagers;
    }
    async getAllUser() {
        return await this.dataServices.user.getAll();
    }
    async getAllEmployees() {
        return await this.dataServices.user.getAll({ role: user_role_enum_1.UserRoleEnum.EMPLOYEE });
    }
    async getAllManagers() {
        return await this.dataServices.user.getAll({ role: user_role_enum_1.UserRoleEnum.MANAGER });
    }
};
exports.AdminUserUseCaseService = AdminUserUseCaseService;
exports.AdminUserUseCaseService = AdminUserUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        admin_user_factory_use_case_service_1.AdminUserFactoryUseCaseService,
        bcrypt_abstract_1.IBcryptService])
], AdminUserUseCaseService);
//# sourceMappingURL=admin-user-use-case.service.js.map