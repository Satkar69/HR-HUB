export declare class CreateQuestionnaireDto {
    review: number;
    question: string;
    answers: string[];
    ratings: number;
}
export declare class UpdateQuestionnaireDto {
    questionnaireId: number;
    answers: string[];
    ratings: number;
}
export declare class UpdateQuestionnairesDto {
    questionnaires: UpdateQuestionnaireDto[];
}
