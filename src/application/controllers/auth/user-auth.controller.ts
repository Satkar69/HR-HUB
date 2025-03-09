import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Public } from 'src/application/decorators/public.decorator';
import { User } from 'src/application/decorators/user.decorator';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { SigninDto } from 'src/core/dtos/request/signin.dto';
import { UserEntity } from 'src/frameworks/data-services/pg/entities/user.entity';
import { UserAuthUseCaseService } from 'src/use-cases/user-use-cases/user-auth/user-auth-use-case-service';

@Controller('/user')
export class UserAuthController {
  constructor(
    private readonly userAuthUseCaseService: UserAuthUseCaseService,
    private readonly cls: ClsService<AppClsStore>,
  ) {}

  @Public()
  @Post('/signin')
  async signin(@Body() signinDto: SigninDto) {
    return CoreApiResponse.success(
      await this.userAuthUseCaseService.signin(signinDto),
      200,
      'Signin successful',
    );
  }

  @User()
  @Get('/me')
  async me() {
    return CoreApiResponse.success(this.cls.get<UserEntity>('user'));
  }
}
