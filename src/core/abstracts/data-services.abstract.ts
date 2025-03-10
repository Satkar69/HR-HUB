import { AdminModel } from '../models';
import { IAdminRepository } from './repositories/admin.abstract';
import { IGenericRepository } from './generic-repository.abstract';
import { UserModel } from '../models/user.model';
import { TeamModel } from '../models/team.model';
import { TeamMemberModel } from '../models/team-member.model';
import { ReviewModel } from '../models/review.model';
import { PeerNominationModel } from '../models/peer-nomination.model';
import { QuestionnaireModel } from '../models/questionnaire.model';

export abstract class IDataServices {
  abstract admin: IAdminRepository<AdminModel>;
  abstract user: IGenericRepository<UserModel>;
  abstract team: IGenericRepository<TeamModel>;
  abstract teamMember: IGenericRepository<TeamMemberModel>;
  abstract review: IGenericRepository<ReviewModel>;
  abstract peerNomination: IGenericRepository<PeerNominationModel>;
  // abstract questionnaire: IGenericRepository<QuestionnaireModel>;
}
