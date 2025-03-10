import { Controller, Get, Query } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Manager } from 'src/application/decorators/manager.decorator';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { UserUseCaseService } from 'src/use-cases/user-use-cases/user-use-case.service';

@Controller()
export class UserController {
  constructor(private userUseCaseService: UserUseCaseService) {}

  @Manager()
  @Get('/employee/get-all')
  async getAllEmployeeUser(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.userUseCaseService.getAllEmployees(),
      query,
    );
  }
}
