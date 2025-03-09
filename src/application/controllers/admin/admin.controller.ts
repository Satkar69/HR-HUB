import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Roles } from 'src/application/decorators/role.decorator';
import { AdminRoleEnum } from 'src/common/enums/admin-role.enum';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import {
  CreateAdminDto,
  UpdateAdminDto,
} from 'src/core/dtos/request/admin.dto';
import { AdminUseCaseService } from 'src/use-cases/admin-use-cases/admin/admin-use-case.service';

@Controller()
export class AdminController {
  constructor(private adminUseCaseService: AdminUseCaseService) {}

  @Post('/create')
  @Roles(AdminRoleEnum.SUPER_ADMIN)
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return CoreApiResponse.success(
      await this.adminUseCaseService.createAdmin(createAdminDto),
      201,
      'Admin created successfully',
    );
  }

  @Patch('/update/:id')
  async updateAdmin(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return CoreApiResponse.success(
      await this.adminUseCaseService.updateAdmin(id, updateAdminDto),
      200,
      'Admin updated successfully',
    );
  }

  @Get('/get-all')
  async getAllAdmin(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.adminUseCaseService.getAllAdmin(),
      query,
    );
  }

  @Get('/get/:id')
  async getAdmin(@Param('id') id: string) {
    return CoreApiResponse.success(await this.adminUseCaseService.getAdmin(id));
  }
}
