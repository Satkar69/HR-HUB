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
import { TeamModel } from 'src/core/models/team.model';
import { TeamMemberModel } from 'src/core/models/team-member.model';
import { ReviewModel } from 'src/core/models/review.model';
import { PeerNominationModel } from 'src/core/models/peer-nomination.model';
import { QuestionnaireModel } from 'src/core/models/questionnaire.model';
import { TeamEntity } from './entities/team.entity';
import { TeamMemberEntity } from './entities/team-member.entity';
import { ReviewEntity } from './entities/review.entity';
import { PeerNominationEntity } from './entities/peer-nomination.entity';
import { QuestionnaireEntity } from './entities/questionnaire.entity';

@Injectable()
export class PgDataServices implements IDataServices, OnApplicationBootstrap {
  admin: IAdminRepository<AdminModel>;
  user: PgGenericRepository<UserModel>;
  team: PgGenericRepository<TeamModel>;
  teamMember: PgGenericRepository<TeamMemberModel>;
  review: PgGenericRepository<ReviewModel>;
  peerNomination: PgGenericRepository<PeerNominationModel>;
  questionnaire: PgGenericRepository<QuestionnaireModel>;

  constructor(
    @Inject(AdminEntity.REPOSITORY)
    private adminRepository: Repository<AdminEntity>,

    @Inject(UserEntity.REPOSITORY)
    private userRepository: Repository<UserEntity>,

    @Inject(TeamEntity.REPOSITORY)
    private teamRepository: Repository<TeamEntity>,

    @Inject(TeamMemberEntity.REPOSITORY)
    private teamMemberRepository: Repository<TeamMemberEntity>,

    @Inject(ReviewEntity.REPOSITORY)
    private reviewRepository: Repository<ReviewEntity>,

    @Inject(PeerNominationEntity.REPOSITORY)
    private peerNominationRepository: Repository<PeerNominationEntity>,

    // @Inject(QuestionnaireEntity.REPOSITORY)
    // private questionnaireRepository: Repository<QuestionnaireEntity>,

    private readonly cls: IClsStore<AppClsStore>,
    @Inject(InjectableString.APP_DATA_SOURCE)
    private dataSource: DataSource,
  ) {}

  onApplicationBootstrap() {
    // admin
    this.admin = new PgAdminRepository(this.cls, this.adminRepository);
    this.user = new PgGenericRepository(this.cls, this.userRepository);
    this.team = new PgGenericRepository(this.cls, this.teamRepository);
    this.teamMember = new PgGenericRepository(
      this.cls,
      this.teamMemberRepository,
    );
    this.review = new PgGenericRepository(this.cls, this.reviewRepository);
    this.peerNomination = new PgGenericRepository(
      this.cls,
      this.peerNominationRepository,
    );
    // this.questionnaire = new PgGenericRepository(
    //   this.cls,
    //   this.questionnaireRepository,
    // );
  }
}
