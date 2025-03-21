import { UpdateQuestionnaireDto } from 'src/core/dtos/request/questionnaire.dto';
import { QuestionnaireModel } from 'src/core/models/questionnaire.model';
export declare class UserReviewQuestionnaireFactoryUseCaseService {
    updateQuestionnaire(updateQuestionnaireDto: UpdateQuestionnaireDto): QuestionnaireModel;
}
