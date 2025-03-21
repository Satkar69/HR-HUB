import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { IPaginationData } from 'src/common/interface/response/interface/response-data.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import {
  AppClsStore,
  UserClsData,
} from 'src/common/interface/app-cls-store.interface';

@Injectable()
export class UserNotificationUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}
}
