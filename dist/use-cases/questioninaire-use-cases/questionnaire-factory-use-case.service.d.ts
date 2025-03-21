import { CreateQuestionnaireDto } from 'src/core/dtos/request/questionnaire.dto';
import { QuestionnaireModel } from 'src/core/models/questionnaire.model';
export declare class QuestionnaireFactoryUseCaseService {
    createQuestionnaire(createQuestionnaireDto: CreateQuestionnaireDto): QuestionnaireModel;
}
