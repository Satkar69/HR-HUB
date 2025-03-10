import { Controller, Get } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { AdminUserUseCaseService } from 'src/use-cases/admin-use-cases/admin-user/admin-user-use-case.service';

@Controller('/user')
export class AdminUserController {
  constructor(private adminUserUseCaseService: AdminUserUseCaseService) {}

  @Get('/get-all')
  async getAllUsers() {
    return CoreApiResponse.success(
      await this.adminUserUseCaseService.getAllUser(),
    );
  }
}
