import { Body, Controller, Post } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { CreateUserDto } from 'src/core/dtos/request/user.dto';
import { AdminUserUseCaseService } from 'src/use-cases/admin-use-cases/admin-user/admin-user-use-case.service';

@Controller('/admin/user')
export class AdminUserAuthController {
  constructor(
    private adminUserUseCaseService: AdminUserUseCaseService,
    private readonly cls: ClsService<AppClsStore>,
  ) {}

  @Post('/signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return CoreApiResponse.success(
      await this.adminUserUseCaseService.createUser(createUserDto),
      200,
      'Signup successful',
    );
  }
}
