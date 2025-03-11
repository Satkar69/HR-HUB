import { Body, Controller, Post } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { UserReviewUseCaseService } from 'src/use-cases/user-use-cases/user-review/user-review-use-case.service';

@Controller('/review')
export class UserReviewController {
  constructor(
    private readonly userReviewUseCaseService: UserReviewUseCaseService,
  ) {}

  @Post('/self/create')
  async createSelfReview(@Body() reviewDto: ReviewDto) {
    return CoreApiResponse.success(
      await this.userReviewUseCaseService.createSelfReview(reviewDto),
    );
  }
}
