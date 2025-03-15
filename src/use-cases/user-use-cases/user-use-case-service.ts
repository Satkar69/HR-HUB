import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class UserUseCaseService {
  constructor(private dataServices: IDataServices) {}

  async getUserbyId(userId: number) {
    return await this.dataServices.user.getOne({ id: userId });
  }
}
