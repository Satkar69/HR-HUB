import { Injectable } from '@nestjs/common';
import AppException from 'src/application/exception/app.exception';
import { IDataServices } from 'src/core/abstracts';
import { CreateUserDto } from 'src/core/dtos/request/user.dto';
import { UserModel } from 'src/core/models/user.model';
import { AdminUserFactoryUseCaseService } from './admin-user-factory-use-case.service';
import { IBcryptService } from 'src/core/abstracts/adapters/bcrypt.abstract';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';

@Injectable()
export class AdminUserUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private adminUserFactoryUseCaseService: AdminUserFactoryUseCaseService,
    private readonly bcryptService: IBcryptService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserModel> {
    const user = this.adminUserFactoryUseCaseService.createUser(createUserDto);
    const oldUser = await this.dataServices.user.getOneOrNull({
      email: createUserDto.email,
    });
    if (oldUser) {
      throw new AppException(
        { email: `${createUserDto.email} already exists` },
        'Email already exists',
        409,
      );
    }
    user.password = await this.bcryptService.hash(user.password);
    return await this.dataServices.user.create(user);
  }

  async getAllUser(): Promise<IPaginationData> {
    return await this.dataServices.user.getAll();
  }
}
