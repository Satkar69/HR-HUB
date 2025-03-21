"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSeeder = void 0;
const common_1 = require("@nestjs/common");
const question_type_enum_1 = require("../../../../common/enums/question-type.enum");
let QuestionSeeder = class QuestionSeeder {
    constructor() { }
    async seed(repository) {
        try {
            const selfReviewQuestions = [
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.SELF,
                    questionId: 1,
                    questionText: 'How would you rate your overall performance? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.SELF,
                    questionId: 2,
                    questionText: 'How well do you manage deadlines and tasks? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.SELF,
                    questionId: 3,
                    questionText: 'What achievements are you most proud of?',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.SELF,
                    questionId: 4,
                    questionText: 'How effectively do you communicate with your team? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.SELF,
                    questionId: 5,
                    questionText: 'What are your strongest skills or qualities?',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.SELF,
                    questionId: 6,
                    questionText: 'Are there any areas where you need improvement?',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.SELF,
                    questionId: 7,
                    questionText: 'How proactive are you in problem-solving and decision-making? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.SELF,
                    questionId: 8,
                    questionText: 'What development opportunities would benefit you?',
                },
            ];
            const managerReviewQuestions = [
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.MANAGER,
                    questionId: 1,
                    questionText: 'How would you rate XYZ’s overall performance? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.MANAGER,
                    questionId: 2,
                    questionText: 'How well does XYZ manage deadlines and tasks? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.MANAGER,
                    questionId: 3,
                    questionText: 'What achievements has XYZ made?',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.MANAGER,
                    questionId: 4,
                    questionText: 'How effectively does XYZ communicate with the team? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.MANAGER,
                    questionId: 5,
                    questionText: 'What are XYZ’s strongest skills or qualities?',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.MANAGER,
                    questionId: 6,
                    questionText: 'Are there any areas where XYZ needs improvement?',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.MANAGER,
                    questionId: 7,
                    questionText: 'How proactive is XYZ in problem-solving and decision-making? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.MANAGER,
                    questionId: 8,
                    questionText: 'What development opportunities would benefit XYZ?',
                },
            ];
            const peerReviewQuestions = [
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.PEER,
                    questionId: 1,
                    questionText: 'How well does XYZ collaborate with the team? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.PEER,
                    questionId: 2,
                    questionText: 'How effectively does XYZ communicate with team members? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.PEER,
                    questionId: 3,
                    questionText: 'How would you describe XYZ’s work ethic and attitude?',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.PEER,
                    questionId: 4,
                    questionText: 'Does XYZ contribute positively to team projects and discussions? (Yes/No + Explanation)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.PEER,
                    questionId: 5,
                    questionText: 'How well does XYZ handle constructive feedback? (1-5 scale)',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.PEER,
                    questionId: 6,
                    questionText: 'What are XYZ’s strengths in a team environment?',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.PEER,
                    questionId: 7,
                    questionText: 'Are there any areas where XYZ could improve?',
                },
                {
                    questionType: question_type_enum_1.QuestionTypeEnum.PEER,
                    questionId: 8,
                    questionText: 'Would you feel confident working with XYZ on a critical project? (Yes/No + Why?)',
                },
            ];
            await Promise.all([
                ...selfReviewQuestions.map(async (selfReviewQuestion) => {
                    await insertIfNotExists(repository, selfReviewQuestion);
                }),
                ...managerReviewQuestions.map(async (managerReviewQuestion) => {
                    await insertIfNotExists(repository, managerReviewQuestion);
                }),
                ...peerReviewQuestions.map(async (peerReviewQuestion) => {
                    await insertIfNotExists(repository, peerReviewQuestion);
                }),
            ]);
            async function insertIfNotExists(repository, questionData) {
                const existingQuestion = await repository.findOne({
                    where: { questionId: questionData.questionId },
                });
                if (!existingQuestion) {
                    await repository.insert(questionData);
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.QuestionSeeder = QuestionSeeder;
exports.QuestionSeeder = QuestionSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], QuestionSeeder);
//# sourceMappingURL=question.seeder.js.map