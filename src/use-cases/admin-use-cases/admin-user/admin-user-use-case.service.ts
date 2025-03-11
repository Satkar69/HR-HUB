import { Injectable } from '@nestjs/common';
import AppException from 'src/application/exception/app.exception';
import { IDataServices } from 'src/core/abstracts';
import { CreateUserDto } from 'src/core/dtos/request/user.dto';
import { UserModel } from 'src/core/models/user.model';
import { AdminUserFactoryUseCaseService } from './admin-user-factory-use-case.service';
import { IBcryptService } from 'src/core/abstracts/adapters/bcrypt.abstract';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';

// todo :: make seperate get api to get employees and manager who are not assigned to any team yet

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

  async getUserById(userId: number) {
    const assignedTeam = await this.dataServices.team.getOneOrNull({
      leader: { id: userId },
    });
    const teamMemberships =
      await this.dataServices.teamMember.getAllWithoutPagination({
        member: { id: userId },
      });
    const user = await this.dataServices.user.getOne({ id: userId });
    // add necessary related datas here

    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      assignedTeam,
      teamMemberships,
    };
  }

  async getAllNonTeamEmployees() {
    const assignedEmployees =
      await this.dataServices.teamMember.getAllWithoutPagination();
    const employees = await this.dataServices.user.getAllWithoutPagination({
      role: UserRoleEnum.EMPLOYEE,
    });
    const nonAssignedEmployees = employees.filter((employee) => {
      return !assignedEmployees.some(
        (assignedEmployee) => assignedEmployee.member.id === employee.id,
      );
    });
    return nonAssignedEmployees;
  }

  async getAllNonTeamManagers() {
    const assignedManagers =
      await this.dataServices.teamMember.getAllWithoutPagination({
        isLeader: true,
      });
    const managers = await this.dataServices.user.getAllWithoutPagination({
      role: UserRoleEnum.MANAGER,
    });
    const nonAssignedManagers = managers.filter((manager) => {
      return !assignedManagers.some(
        (assignedManager) => assignedManager.member.id === manager.id,
      );
    });
    return nonAssignedManagers;
  }

  async getAllUser(): Promise<IPaginationData> {
    return await this.dataServices.user.getAll();
  }

  async getAllEmployees(): Promise<IPaginationData> {
    return await this.dataServices.user.getAll({ role: UserRoleEnum.EMPLOYEE });
  }

  async getAllManagers(): Promise<IPaginationData> {
    return await this.dataServices.user.getAll({ role: UserRoleEnum.MANAGER });
  }
}
