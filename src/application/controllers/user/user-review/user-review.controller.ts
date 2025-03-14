import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Manager } from 'src/application/decorators/manager.decorator';
import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { ReviewDto } from 'src/core/dtos/request/review.dto';
import { UserReviewUseCaseService } from 'src/use-cases/user-use-cases/user-review/user-review-use-case.service';

@Controller('/review')
export class UserReviewController {
  constructor(
    private readonly userReviewUseCaseService: UserReviewUseCaseService,
  ) {}

  @Get('/my/self/get-all')
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

  @Patch('/submit/:id')
  async submitReview(@Param('id') reviewId: number) {
    return CoreApiResponse.success(
      await this.userReviewUseCaseService.submitReviewById(reviewId),
    );
  }

  @Manager()
  @Get('/my-team/self/get-all')
  async getMyTeamMembersSelfReviews() {
    return CoreApiResponse.success(
      await this.userReviewUseCaseService.getMyTeamSelfReviews(),
    );
  }

  // TODO :: test the route in postman
  @Manager()
  @Get('/my-team/manager/get-all')
  async getMyTeamMembersManagerReviews() {
    return CoreApiResponse.success(
      await this.userReviewUseCaseService.getMyTeamManagerReviews(),
    );
  }

  // TODO :: test the route in postman
  @Manager()
  @Post('/manager/create')
  async createManagerReview(@Body() reviewDto: ReviewDto) {
    return CoreApiResponse.success(
      await this.userReviewUseCaseService.createManagerReview(reviewDto),
    );
  }

  // TODO :: test the route in postman
  @Manager()
  @Patch('/mark-as-complete/:id')
  async markAsComplete(@Param('id') reviewId: number) {
    return CoreApiResponse.success(
      await this.userReviewUseCaseService.markReviewAsCompleted(reviewId),
    );
  }
}
