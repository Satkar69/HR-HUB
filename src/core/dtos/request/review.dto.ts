import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';
import { ReviewTypeEnum } from 'src/common/enums/review-type.enum';

export class ReviewDto {
  @IsOptional()
  @IsEnum(ReviewTypeEnum)
  reviewType: ReviewTypeEnum;

  @IsOptional()
  @IsNumber()
  reviewer: number;

  @IsOptional()
  @IsNumber()
  reviewee: number;

  @IsOptional()
  @IsString()
  subject: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(ReviewProgressStatusEnum)
  progressStatus: ReviewProgressStatusEnum;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  dueDate: Date;
}
