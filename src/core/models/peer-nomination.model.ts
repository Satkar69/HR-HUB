import { PeerNominationStatusEnum } from 'src/common/enums/peer-nomination-status.enum';
import { ReviewModel } from './review.model';
import { UserModel } from './user.model';

export class PeerNomincationModel {
  id: number;
  review: ReviewModel;
  nominator: UserModel;
  nominee: UserModel;
  reviewee: UserModel;
  nominationStatus: PeerNominationStatusEnum;
}
