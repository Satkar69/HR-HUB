import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IDataServices } from 'src/core/abstracts';
import { CreateAdminDto, UpdateAdminDto, UpdateAdminPasswordDto } from 'src/core/dtos/request/admin.dto';
import { AdminModel } from 'src/core/models';
import { AdminFactoryService } from './admin-factory.service';
export declare class AdminUseCaseService {
    private dataServices;
    private adminFactory;
    constructor(dataServices: IDataServices, adminFactory: AdminFactoryService);
    getAllAdmin(): Promise<IPaginationData>;
    getAdmin(id: string): Promise<AdminModel>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<AdminModel>;
    updateAdmin(adminId: string, updateAdminDto: UpdateAdminDto): Promise<AdminModel>;
    updateAdminPassword(adminId: string, updateAdminPasswordDto: UpdateAdminPasswordDto): Promise<AdminModel>;
}
