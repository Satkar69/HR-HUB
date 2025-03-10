import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTeamMemberDto {
  @IsNotEmpty()
  @IsNumber()
  team: number;
  @IsNotEmpty()
  @IsNumber()
  member: number;
}
