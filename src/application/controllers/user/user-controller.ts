import { Controller, Get, Param } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { UserUseCaseService } from 'src/use-cases/user-use-cases/user-use-case-service';

@Controller()
export class UserController {
  constructor(private userUseCaseService: UserUseCaseService) {}

  @Get('/get/:id')
  async getUser(@Param('id') userId: number) {
    return CoreApiResponse.success(
      await this.userUseCaseService.getUserbyId(userId),
    );
  }
}
