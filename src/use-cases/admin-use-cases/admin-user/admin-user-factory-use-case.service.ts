import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos/request/user.dto';
import { UserModel } from 'src/core/models/user.model';

@Injectable()
export class AdminUserFactoryUseCaseService {
  createUser(createUserDto: CreateUserDto) {
    const user = new UserModel();
    user.fullname = createUserDto.fullname;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.role = createUserDto.role;
    return user;
  }
}
