import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateReviewSummaryDto {
  @IsNotEmpty()
  @IsNumber()
  reviewee: number;
  @IsNotEmpty()
  @IsNumber()
  selfReview: number;
  @IsNotEmpty()
  @IsNumber()
  managerReview: number;
  @IsNotEmpty()
  @IsArray()
  summaryQuestionnaire: {
    question: string;
    managerFeedback: { answers: string[]; ratings: number };
    revieweeFeedback: { answers: string[]; ratings: number };
  }[];
  @IsNotEmpty()
  @IsNumber()
  averagePerformanceRating: number;

  @IsOptional()
  @IsBoolean()
  isAcknowledged: boolean;
}

export class UpdateReviewSummaryAcknowledgementDto {
  @IsOptional()
  @IsBoolean()
  isAcknowledged: boolean;
}
