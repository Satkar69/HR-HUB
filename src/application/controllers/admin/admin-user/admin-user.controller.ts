import { Controller, Get, Param, Query } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { AdminUserUseCaseService } from 'src/use-cases/admin-use-cases/admin-user/admin-user-use-case.service';

@Controller('/user')
export class AdminUserController {
  constructor(private adminUserUseCaseService: AdminUserUseCaseService) {}

  @Get('/get-all')
  async getAllUser(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.adminUserUseCaseService.getAllUser(),
      query,
    );
  }

  @Get('/get/:id')
  async getUser(@Param('id') userId: number) {
    return CoreApiResponse.success(
      await this.adminUserUseCaseService.getUserById(userId),
    );
  }

  @Get('/employee/get-all')
  async getAllEmployeeUser(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.adminUserUseCaseService.getAllEmployees(),
      query,
    );
  }

  @Get('/manager/get-all')
  async getAllManagerUser(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.adminUserUseCaseService.getAllManagers(),
      query,
    );
  }
}
