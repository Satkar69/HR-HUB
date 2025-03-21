import { Injectable } from '@nestjs/common';
import AppException from 'src/application/exception/app.exception';
import { IDataServices } from 'src/core/abstracts';
import { IBcryptService } from 'src/core/abstracts/adapters/bcrypt.abstract';
import { IJwtService } from 'src/core/abstracts/adapters/jwt.interface';
import { CheckTokenDto, SigninDto } from 'src/core/dtos/request/signin.dto';
import { UserSignInResponseType } from './types/user-signin-response';
import { UserModel } from 'src/core/models/user.model';
import { addFcmToken } from 'src/common/utils/add-fcm-token';

@Injectable()
export class UserAuthUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private readonly _jwtService: IJwtService,
    private readonly bcryptService: IBcryptService,
  ) {}

  async getUserByEmail(email: string): Promise<UserModel> {
    return await this.dataServices.user.getOne({ email });
  }

  async signin(signinDto: SigninDto): Promise<UserSignInResponseType> {
    const user = await this.dataServices.user.getOneOrNull({
      email: signinDto.email,
    });
    if (!user) {
      throw new AppException({}, 'Incorrect Email or Password', 400);
    }
    if (
      user &&
      !(await this.bcryptService.compare(signinDto.password, user.password))
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
    //   null,
    //   user,
    // );

    const payload = { sub: user.email };
    const accessToken = await this._jwtService.createToken(payload);
    return { accessToken, user: user };
  }

  /**
   *  checks if token is expired or not
   */
  async isValidToken(dto: CheckTokenDto): Promise<any> {
    return await this._jwtService.checkToken(dto.token);
  }
}
