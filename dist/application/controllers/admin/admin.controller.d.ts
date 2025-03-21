import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { CreateAdminDto, UpdateAdminDto } from 'src/core/dtos/request/admin.dto';
import { AdminUseCaseService } from 'src/use-cases/admin-use-cases/admin/admin-use-case.service';
export declare class AdminController {
    private adminUseCaseService;
    constructor(adminUseCaseService: AdminUseCaseService);
    createAdmin(createAdminDto: CreateAdminDto): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../core/models").AdminModel>>;
    updateAdmin(id: string, updateAdminDto: UpdateAdminDto): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../core/models").AdminModel>>;
    getAllAdmin(query: IPaginationQuery): Promise<import("../../../common/interface/response/app-pagination").AppPagination<any>>;
    getAdmin(id: string): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../core/models").AdminModel>>;
}
