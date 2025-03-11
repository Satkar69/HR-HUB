import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTeamMemberDto {
  @IsNotEmpty()
  @IsNumber()
  team: number;
  @IsNotEmpty()
  member: number;
}

export class AddTeamMembersDto {
  @IsNotEmpty()
  @IsNumber()
  team: number;
  @IsNotEmpty()
  members: number[];
}
