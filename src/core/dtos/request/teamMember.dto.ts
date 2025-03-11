import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTeamMemberDto {
  @IsNotEmpty()
  @IsNumber()
  team: number;
  @IsNotEmpty()
  @IsNumber()
  member: number;
  @IsOptional()
  @IsBoolean()
  isLeader: boolean;
}
