import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsNumber()
  leader: number;
  @IsNotEmpty()
  @IsString()
  department: string;
  @IsOptional()
  members: number[];
}

export class UpdateTeamDto {
  @IsOptional()
  @IsNumber()
  leader: number;
  @IsOptional()
  @IsString()
  department: string;
  @IsOptional()
  members: number[];
}
