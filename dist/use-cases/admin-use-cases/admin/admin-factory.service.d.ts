import { CreateAdminDto, UpdateAdminDto, UpdateAdminPasswordDto } from 'src/core/dtos/request/admin.dto';
import { AdminModel } from 'src/core/models';
export declare class AdminFactoryService {
    createNewAdmin(createAdminDto: CreateAdminDto): AdminModel;
    updateAdmin(updateAdminDto: UpdateAdminDto): AdminModel;
    updateAdminPassword(updateAdminPasswordDto: UpdateAdminPasswordDto): AdminModel;
}
