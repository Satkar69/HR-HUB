import { IDataServices } from 'src/core/abstracts';
import { UpdateQuestionnairesDto } from 'src/core/dtos/request/questionnaire.dto';
import { UserReviewQuestionnaireFactoryUseCaseService } from './user-review-questionnaire-factory-use-case.service';
export declare class UserReviewQuestionnaireUseCaseService {
    private dataServices;
    private userReviewQuestionnaireFactoryUseCaseService;
    constructor(dataServices: IDataServices, userReviewQuestionnaireFactoryUseCaseService: UserReviewQuestionnaireFactoryUseCaseService);
    updateQuestionnaires(updateQuestionnairesDto: UpdateQuestionnairesDto): Promise<any[]>;
}
