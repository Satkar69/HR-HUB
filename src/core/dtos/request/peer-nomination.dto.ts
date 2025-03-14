import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { PeerNominationStatusEnum } from 'src/common/enums/peer-nomination-status.enum';

export class PeerNominationDto {
  @IsNotEmpty()
  @IsNumber()
  nominator: number;

  @IsNotEmpty()
  @IsNumber()
  nominee: number;

  @IsNotEmpty()
  @IsNumber()
  reviewee: number;

  @IsNotEmpty()
  @IsEnum(PeerNominationStatusEnum)
  nominationStatus: PeerNominationStatusEnum;
}
