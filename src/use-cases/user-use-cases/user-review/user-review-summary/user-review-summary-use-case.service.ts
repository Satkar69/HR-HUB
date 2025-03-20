import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { UserClsData } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';

// TODO :: make the necessary services to get the user's review summary and to get user's acknowledgement
@Injectable()
export class UserReviewSummaryUseCaseService {
  constructor(
    private dataServices: IDataServices,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}
}
