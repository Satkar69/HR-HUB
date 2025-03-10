import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';

@Injectable()
export class UserUseCaseService {
  constructor(private dataServices: IDataServices) {}

  // todo :: make corresponding routes along with a controller
  async getUserbyId(userId: number) {
    return await this.dataServices.user.getOne({ id: userId });
  }
}
