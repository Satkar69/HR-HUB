import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class createQuestionnaireDto {
  @IsNotEmpty()
  @IsNumber()
  review: number;

  @IsNotEmpty()
  @IsString()
  question: string;

  @IsOptional()
  @IsString()
  answer: string;

  @IsOptional()
  @IsNumber()
  ratings: number;
}
