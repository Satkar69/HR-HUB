import { UpdateQuestionnairesDto } from 'src/core/dtos/request/questionnaire.dto';
import { UserReviewQuestionnaireUseCaseService } from 'src/use-cases/user-use-cases/user-review/user-review-questionnaire/user-review-questionnaire-use-case.service';
export declare class UserReviewQuestionnaireController {
    private userReviewQuestionnaireUseCaseService;
    constructor(userReviewQuestionnaireUseCaseService: UserReviewQuestionnaireUseCaseService);
    updateReviewQuestionnaires(updateQuestionnairesDto: UpdateQuestionnairesDto): Promise<import("../../../../../common/interface/response/app-response").AppResponse<any[]>>;
}
