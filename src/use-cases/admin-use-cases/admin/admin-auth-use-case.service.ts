import { Injectable } from '@nestjs/common';
import AppException from 'src/application/exception/app.exception';
import { IDataServices } from 'src/core/abstracts';
import { IBcryptService } from 'src/core/abstracts/adapters/bcrypt.abstract';
import { IJwtService } from 'src/core/abstracts/adapters/jwt.interface';
import { CheckTokenDto, SigninDto } from 'src/core/dtos/request/signin.dto';
import { AdminModel } from 'src/core/models';
import { AdminSignInResponseType } from './types/admin-signin-response';
import { addFcmToken } from 'src/common/utils/add-fcm-token';

@Injectable()
export class AdminAuthUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private readonly _jwtService: IJwtService,
    private readonly bcryptService: IBcryptService,
  ) {}

  async getAdminByEmail(email: string): Promise<AdminModel> {
    return await this.dataServices.admin.getOne({
      email,
    });
  }

  async signin(signinDto: SigninDto): Promise<AdminSignInResponseType> {
    const adminUser = await this.dataServices.admin.getOneOrNull({
      email: signinDto.email,
    });
    if (!adminUser) {
      throw new AppException({}, 'Incorrect Email or Password', 400);
    }
    if (
      adminUser &&
      !(await this.bcryptService.compare(
        signinDto.password,
        adminUser.password,
      ))
    ) {
      throw new AppException({}, 'Incorrect Email or Password', 400);
    }
    // if (!signinDto.deviceId || !signinDto.fcmToken || !signinDto.deviceType) {
    //   throw new AppException(
    //     {},
    //     'Device Id, Fcm Token and Device Type are required',
    //     400,
    //   );
    // }

    // await addFcmToken(
    //   this.dataServices,
    //   {
    //     deviceId: signinDto.deviceId,
    //     fcmToken: signinDto.fcmToken,
    //     deviceType: signinDto.deviceType,
    //   },
    //   adminUser,
    //   null,
    // );

    const payload = { sub: adminUser.email };
    const accessToken = await this._jwtService.createToken(payload);
    return { accessToken, user: adminUser };
  }

  /**
   *  checks if token is expired or not
   */
  async isValidToken(dto: CheckTokenDto): Promise<any> {
    return await this._jwtService.checkToken(dto.token);
  }
}
