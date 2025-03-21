import { CreateUserDto } from 'src/core/dtos/request/user.dto';
import { UserModel } from 'src/core/models/user.model';
export declare class AdminUserFactoryUseCaseService {
    createUser(createUserDto: CreateUserDto): UserModel;
}
