import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  department: string;
}

export class UpdateTeamDto {
  @IsOptional()
  @IsString()
  department: string;
}
