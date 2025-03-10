import { Injectable } from '@nestjs/common';
import { UserRoleEnum } from 'src/common/enums/user-role.enum';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class UserUseCaseService {
  constructor(private dataServices: IDataServices) {}

  async getAllEmployees(): Promise<IPaginationData> {
    return await this.dataServices.user.getAll({ role: UserRoleEnum.EMPLOYEE });
  }
}
