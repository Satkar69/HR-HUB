// import { Inject, Injectable } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { QuestionEntity } from '../entities/question.entity';
import { QuestionTypeEnum } from 'src/common/enums/question-type.enum';

@Injectable()
export class QuestionSeeder {
  constructor() {}

  async seed(repository: Repository<QuestionEntity>) {
    try {
      const selfReviewQuestions = [
        {
          questionType: QuestionTypeEnum.SELF,
          questionId: 1,
          questionText:
            'How would you rate your overall performance? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.SELF,
          questionId: 2,
          questionText:
            'How well do you manage deadlines and tasks? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.SELF,
          questionId: 3,
          questionText: 'What achievements are you most proud of?',
        },
        {
          questionType: QuestionTypeEnum.SELF,
          questionId: 4,
          questionText:
            'How effectively do you communicate with your team? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.SELF,
          questionId: 5,
          questionText: 'What are your strongest skills or qualities?',
        },
        {
          questionType: QuestionTypeEnum.SELF,
          questionId: 6,
          questionText: 'Are there any areas where you need improvement?',
        },
        {
          questionType: QuestionTypeEnum.SELF,
          questionId: 7,
          questionText:
            'How proactive are you in problem-solving and decision-making? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.SELF,
          questionId: 8,
          questionText: 'What development opportunities would benefit you?',
        },
      ];

      const managerReviewQuestions = [
        {
          questionType: QuestionTypeEnum.MANAGER,
          questionId: 1,
          questionText:
            'How would you rate XYZ’s overall performance? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.MANAGER,
          questionId: 2,
          questionText:
            'How well does XYZ manage deadlines and tasks? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.MANAGER,
          questionId: 3,
          questionText: 'What achievements has XYZ made?',
        },
        {
          questionType: QuestionTypeEnum.MANAGER,
          questionId: 4,
          questionText:
            'How effectively does XYZ communicate with the team? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.MANAGER,
          questionId: 5,
          questionText: 'What are XYZ’s strongest skills or qualities?',
        },
        {
          questionType: QuestionTypeEnum.MANAGER,
          questionId: 6,
          questionText: 'Are there any areas where XYZ needs improvement?',
        },
        {
          questionType: QuestionTypeEnum.MANAGER,
          questionId: 7,
          questionText:
            'How proactive is XYZ in problem-solving and decision-making? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.MANAGER,
          questionId: 8,
          questionText: 'What development opportunities would benefit XYZ?',
        },
      ];
      const peerReviewQuestions = [
        {
          questionType: QuestionTypeEnum.PEER,
          questionId: 1,
          questionText:
            'How well does XYZ collaborate with the team? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.PEER,
          questionId: 2,
          questionText:
            'How effectively does XYZ communicate with team members? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.PEER,
          questionId: 3,
          questionText: 'How would you describe XYZ’s work ethic and attitude?',
        },
        {
          questionType: QuestionTypeEnum.PEER,
          questionId: 4,
          questionText:
            'Does XYZ contribute positively to team projects and discussions? (Yes/No + Explanation)',
        },
        {
          questionType: QuestionTypeEnum.PEER,
          questionId: 5,
          questionText:
            'How well does XYZ handle constructive feedback? (1-5 scale)',
        },
        {
          questionType: QuestionTypeEnum.PEER,
          questionId: 6,
          questionText: 'What are XYZ’s strengths in a team environment?',
        },
        {
          questionType: QuestionTypeEnum.PEER,
          questionId: 7,
          questionText: 'Are there any areas where XYZ could improve?',
        },
        {
          questionType: QuestionTypeEnum.PEER,
          questionId: 8,
          questionText:
            'Would you feel confident working with XYZ on a critical project? (Yes/No + Why?)',
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

      async function insertIfNotExists(
        repository: Repository<QuestionEntity>,
        questionData: any,
      ) {
        const existingQuestion = await repository.findOne({
          where: { questionId: questionData.questionId },
        });

        if (!existingQuestion) {
          await repository.insert(questionData);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
}
