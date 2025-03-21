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
exports.AdminUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../core/abstracts");
const admin_factory_service_1 = require("./admin-factory.service");
const app_exception_1 = require("../../../application/exception/app.exception");
let AdminUseCaseService = class AdminUseCaseService {
    constructor(dataServices, adminFactory) {
        this.dataServices = dataServices;
        this.adminFactory = adminFactory;
    }
    async getAllAdmin() {
        return await this.dataServices.admin.getAll();
    }
    async getAdmin(id) {
        return await this.dataServices.admin.getOne({
            id: +id,
        });
    }
    async createAdmin(createAdminDto) {
        const admin = this.adminFactory.createNewAdmin(createAdminDto);
        const oldAdmin = await this.dataServices.admin.getOneOrNull({
            email: createAdminDto.email,
        });
        if (oldAdmin) {
            throw new app_exception_1.default({ email: `${createAdminDto.email} already exists` }, 'Email already exists', 409);
        }
        return await this.dataServices.admin.create(admin);
    }
    async updateAdmin(adminId, updateAdminDto) {
        const newAdmin = this.adminFactory.updateAdmin(updateAdminDto);
        return await this.dataServices.admin.update({ id: adminId }, newAdmin);
    }
    async updateAdminPassword(adminId, updateAdminPasswordDto) {
        const admin = await this.dataServices.admin.getOne({ id: +adminId });
        if (!admin) {
            throw new Error('Admin not found');
        }
        else {
            if (admin.password === updateAdminPasswordDto.oldPassword) {
                const newAdmin = this.adminFactory.updateAdminPassword(updateAdminPasswordDto);
                return await this.dataServices.admin.update({ id: adminId }, newAdmin);
            }
            else {
                throw new Error('Wrong password');
            }
        }
    }
};
exports.AdminUseCaseService = AdminUseCaseService;
exports.AdminUseCaseService = AdminUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        admin_factory_service_1.AdminFactoryService])
], AdminUseCaseService);
//# sourceMappingURL=admin-use-case.service.js.map