import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateQuestionnaireDto {
  @IsNotEmpty()
  @IsNumber()
  review: number;

  @IsNotEmpty()
  @IsString()
  question: string;

  @IsOptional()
  answers: string[];

  @IsOptional()
  @IsNumber()
  ratings: number;
}

export class UpdateQuestionnaireDto {
  @IsNotEmpty()
  @IsNumber()
  questionnaireId: number;

  @IsOptional()
  answers: string[];

  @IsOptional()
  @IsNumber()
  ratings: number;
}

export class UpdateQuestionnairesDto {
  @ValidateNested({ each: true }) // Validates each item in the array
  @Type(() => UpdateQuestionnaireDto) // Helps with transformation
  questionnaires: UpdateQuestionnaireDto[];
}
