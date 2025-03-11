import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { UserReviewUseCaseService } from 'src/use-cases/user-use-cases/user-review/user-review-use-case.service';

@Controller('/review')
export class UserReviewController {
  constructor(
    private readonly userReviewUseCaseService: UserReviewUseCaseService,
  ) {}

  @Get('/self/get-all')
  async getMySelfReviews(@Query() query: IPaginationQuery) {
    return CoreApiResponse.pagination(
      await this.userReviewUseCaseService.getMySelfReviews(),
      query,
    );
  }

  @Post('/self/create')
  async createSelfReview(@Body() reviewDto: ReviewDto) {
    return CoreApiResponse.success(
      await this.userReviewUseCaseService.createSelfReview(reviewDto),
    );
  }
}
