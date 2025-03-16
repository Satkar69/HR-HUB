import { Body, Controller, Param, Patch } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { UpdateQuestionnairesDto } from 'src/core/dtos/request/questionnaire.dto';
import { UserReviewQuestionnaireUseCaseService } from 'src/use-cases/user-use-cases/user-review/user-review-questionnaire/user-review-questionnaire-use-case.service';

@Controller('/review')
export class UserReviewQuestionnaireController {
  constructor(
    private userReviewQuestionnaireUseCaseService: UserReviewQuestionnaireUseCaseService,
  ) {}

  // @Patch('/questionnaire/update')
  // async updateReviewQuestionnaires(
  //   @Body() updateQuestionnairesDto: UpdateQuestionnairesDto,
  // ) {
  //   return CoreApiResponse.success(
  //     await this.userReviewQuestionnaireUseCaseService.updateQuestionnaires(
  //       updateQuestionnairesDto,
  //     ),
  //   );
  // }

  @Patch('/:id/questionnaire/update')
  async updateQuestionnaireByReview(
    @Param('id') reviewId: number,
    @Body() updateQuestionnairesDto: UpdateQuestionnairesDto,
  ) {
    return CoreApiResponse.success(
      await this.userReviewQuestionnaireUseCaseService.updateQuestionnairesByReviewId(
        reviewId,
        updateQuestionnairesDto,
      ),
    );
  }
}
