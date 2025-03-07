import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import InjectableString from 'src/common/injectable.string';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IDataServices, IGenericRepository } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { IAdminRepository } from 'src/core/abstracts/repositories/admin.abstract';
import { AdminModel } from 'src/core/models';
import { DataSource, Repository } from 'typeorm';
import { AdminEntity } from './entities/admin.entity';
import { PgAdminRepository } from './repositories/admin.repository';
import { UserModel } from 'src/core/models/user.model';
import { PgGenericRepository } from './pg-generic-repository';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class PgDataServices implements IDataServices, OnApplicationBootstrap {
  admin: IAdminRepository<AdminModel>;
  user: PgGenericRepository<UserModel>;

  constructor(
    @Inject(AdminEntity.REPOSITORY)
    private adminRepository: Repository<AdminEntity>,

    @Inject(UserEntity.REPOSITORY)
    private userRepository: Repository<UserEntity>,

    private readonly cls: IClsStore<AppClsStore>,
    @Inject(InjectableString.APP_DATA_SOURCE)
    private dataSource: DataSource,
  ) {}

  onApplicationBootstrap() {
    // admin
    this.admin = new PgAdminRepository(this.cls, this.adminRepository);
    this.user = new PgGenericRepository(this.cls, this.userRepository);
  }
}
