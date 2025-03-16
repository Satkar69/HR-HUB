import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
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

  @IsOptional()
  @IsEnum(PeerNominationStatusEnum)
  nominationStatus: PeerNominationStatusEnum;
}

export class UpdatePeerNominationStatusDto {
  @IsNotEmpty()
  @IsEnum(PeerNominationStatusEnum)
  nominationStatus: PeerNominationStatusEnum;
}
