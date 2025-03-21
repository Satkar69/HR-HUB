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
exports.UserReviewUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const question_type_enum_1 = require("../../../common/enums/question-type.enum");
const abstracts_1 = require("../../../core/abstracts");
const review_dto_1 = require("../../../core/dtos/request/review.dto");
const questionnaire_factory_use_case_service_1 = require("../../questioninaire-use-cases/questionnaire-factory-use-case.service");
const review_factory_use_case_service_1 = require("../../review-use-cases/review-factory-use-case.service");
const questionnaire_dto_1 = require("../../../core/dtos/request/questionnaire.dto");
const review_progress_status_enum_1 = require("../../../common/enums/review-progress-status.enum");
const cls_store_abstract_1 = require("../../../core/abstracts/adapters/cls-store.abstract");
const review_type_enum_1 = require("../../../common/enums/review-type.enum");
const app_exception_1 = require("../../../application/exception/app.exception");
const user_role_enum_1 = require("../../../common/enums/user-role.enum");
const user_review_questionnaire_factory_use_case_service_1 = require("./user-review-questionnaire/user-review-questionnaire-factory-use-case.service");
const typeorm_1 = require("typeorm");
const user_review_summary_factory_use_case_service_1 = require("./user-review-summary/user-review-summary-factory-use-case.service");
const review_summary_dto_1 = require("../../../core/dtos/review-summary.dto");
let UserReviewUseCaseService = class UserReviewUseCaseService {
    constructor(dataServices, reviewFactoryUseCaseService, questionnaireFactroyUseCaseService, userReviewQuestionnaireFactoryUseCaseService, userReviewSummaryFactoryUseCaseService, cls) {
        this.dataServices = dataServices;
        this.reviewFactoryUseCaseService = reviewFactoryUseCaseService;
        this.questionnaireFactroyUseCaseService = questionnaireFactroyUseCaseService;
        this.userReviewQuestionnaireFactoryUseCaseService = userReviewQuestionnaireFactoryUseCaseService;
        this.userReviewSummaryFactoryUseCaseService = userReviewSummaryFactoryUseCaseService;
        this.cls = cls;
    }
    async getMySelfReviews() {
        const userId = this.cls.get('user')?.id;
        return await this.dataServices.review.getAll({
            reviewer: { id: userId },
            reviewee: { id: userId },
            reviewType: review_type_enum_1.ReviewTypeEnum.SELF,
        });
    }
    async getMyManagerReviews() {
        const userId = this.cls.get('user')?.id;
        const user = await this.dataServices.user.getOne({ id: userId });
        if (user.role === user_role_enum_1.UserRoleEnum.MANAGER) {
            throw new app_exception_1.default({ message: `Manager users don't have their own manager reviews` }, `Manager users don't have their own manager reviews`, 400);
        }
        const myTeamMembership = await this.dataServices.teamMember.getOneOrNull({
            member: { id: userId },
        }, { team: true });
        if (!myTeamMembership) {
            throw new app_exception_1.default({ message: `You are not a member of any team` }, 'You are not a member of any team', 404);
        }
        const myTeam = await this.dataServices.team.getOneOrNull({
            id: myTeamMembership.team.id,
        });
        return await this.dataServices.review.getAll({
            reviewer: { id: myTeam.leader.id },
            reviewee: { id: userId },
            reviewType: review_type_enum_1.ReviewTypeEnum.MANAGER,
        });
    }
    async getMyPeerReviewsAsNominee() {
        const userId = this.cls.get('user')?.id;
        return await this.dataServices.review.getAll({
            reviewer: { id: userId },
            reviewType: review_type_enum_1.ReviewTypeEnum.PEER,
        });
    }
    async getMyTeamSelfReviews() {
        const userId = this.cls.get('user')?.id;
        const myTeam = await this.dataServices.team.getOneOrNull({
            leader: { id: userId },
        });
        if (!myTeam) {
            throw new app_exception_1.default({ message: `You are not not assigned to any team as a leader` }, 'You are not not assigned to any team as a leader', 404);
        }
        const myTeamMembers = await this.dataServices.teamMember.getAllWithoutPagination({
            team: { id: myTeam.id },
        });
        if (myTeamMembers.length === 0) {
            return [];
        }
        const reviewPromises = await Promise.all(myTeamMembers.map(async (teamMember) => {
            return await this.dataServices.review.getOneOrNull({
                reviewer: { id: teamMember.member.id },
                reviewee: { id: teamMember.member.id },
                reviewType: review_type_enum_1.ReviewTypeEnum.SELF,
            });
        }));
        const selfReviews = reviewPromises.filter((review) => review !== null);
        return selfReviews;
    }
    async getMyTeamManagerReviews() {
        const userId = this.cls.get('user')?.id;
        const myTeam = await this.dataServices.team.getOneOrNull({
            leader: { id: userId },
        });
        if (!myTeam) {
            throw new app_exception_1.default({ message: `You are not not assigned to any team as a leader` }, 'You are not not assigned to any team as a leader', 404);
        }
        const myTeamMembers = await this.dataServices.teamMember.getAllWithoutPagination({
            team: { id: myTeam.id },
        });
        if (myTeamMembers.length === 0) {
            return [];
        }
        const reviewPromises = await Promise.all(myTeamMembers.map(async (teamMember) => {
            return await this.dataServices.review.getOneOrNull({
                reviewer: { id: userId },
                reviewee: { id: teamMember.member.id },
                reviewType: review_type_enum_1.ReviewTypeEnum.MANAGER,
            });
        }));
        const managerReviews = reviewPromises.filter((review) => review !== null);
        return managerReviews;
    }
    async getMyTeamPeerReviews() {
        const userId = this.cls.get('user')?.id;
        const peerNominations = await this.dataServices.peerNomination.getAllWithoutPagination({
            nominator: { id: userId },
        });
        if (peerNominations.length === 0) {
            return [];
        }
        const reviewPromises = await Promise.all(peerNominations.map(async (peerNomination) => {
            return await this.dataServices.review.getOneOrNull({
                reviewer: { id: peerNomination.nominee.id },
                reviewType: review_type_enum_1.ReviewTypeEnum.PEER,
            });
        }));
        const peerReviews = reviewPromises.filter((review) => review !== null);
        return peerReviews;
    }
    async createSelfReview(reviewDto) {
        const userId = this.cls.get('user')?.id;
        const selfReviews = await this.dataServices.review.getAllWithoutPagination({
            reviewer: { id: userId },
            reviewee: { id: userId },
            reviewType: review_type_enum_1.ReviewTypeEnum.SELF,
        });
        if (selfReviews.length > 0) {
            if (selfReviews[selfReviews.length - 1].progressStatus !==
                review_progress_status_enum_1.ReviewProgressStatusEnum.COMPLETED) {
                throw new app_exception_1.default({ message: `You already have an incomplete self review` }, 'You already have an incomplete self review', 409);
            }
            const reviewSummary = await this.dataServices.reviewSummary.getOneOrNull({
                selfReview: { id: selfReviews[selfReviews.length - 1].id },
            });
            if (reviewSummary.isAcknowledged !== true) {
                throw new app_exception_1.default({ message: `You have an unacknowledged review summary` }, 'You have an unacknowledged review summary', 409);
            }
        }
        const newReview = this.reviewFactoryUseCaseService.createReview({
            ...reviewDto,
            reviewType: review_type_enum_1.ReviewTypeEnum.SELF,
            reviewer: userId,
            reviewee: userId,
            progressStatus: review_progress_status_enum_1.ReviewProgressStatusEnum.PENDING,
        });
        const createdReview = await this.dataServices.review.create(newReview);
        const questions = await this.dataServices.question.getAllWithoutPagination({
            questionType: question_type_enum_1.QuestionTypeEnum.SELF,
        });
        const questionnaires = await Promise.all(questions.map(async (question) => {
            const questionnaireDto = new questionnaire_dto_1.CreateQuestionnaireDto();
            questionnaireDto.review = createdReview.id;
            questionnaireDto.question = question.questionText;
            return this.questionnaireFactroyUseCaseService.createQuestionnaire(questionnaireDto);
        }));
        await this.dataServices.questionnaire.createBulk(questionnaires);
        return createdReview;
    }
    async createManagerReview(reviewDto) {
        const userId = this.cls.get('user')?.id;
        const isTeamMember = await this.dataServices.teamMember.getOneOrNull({
            member: { id: reviewDto.reviewee },
        });
        if (!isTeamMember) {
            throw new app_exception_1.default({ message: `The reviewee is not a team member` }, 'The reviewee is not a team member', 400);
        }
        const selfReviews = await this.dataServices.review.getAllWithoutPagination({
            reviewer: { id: reviewDto.reviewee },
            reviewee: { id: reviewDto.reviewee },
            reviewType: review_type_enum_1.ReviewTypeEnum.SELF,
        });
        if (selfReviews.length > 0) {
            if (selfReviews[selfReviews.length - 1].progressStatus !==
                review_progress_status_enum_1.ReviewProgressStatusEnum.COMPLETED) {
                throw new app_exception_1.default({
                    message: `You have yet to evaluate the reviewee's latest self review`,
                }, `You have yet to evaluate the reviewee's latest self review`, 400);
            }
        }
        const inCompleteManagerReviews = await this.dataServices.review.getAllWithoutPagination({
            reviewer: { id: userId },
            reviewee: { id: reviewDto.reviewee },
            progressStatus: (0, typeorm_1.Not)(review_progress_status_enum_1.ReviewProgressStatusEnum.COMPLETED),
            reviewType: review_type_enum_1.ReviewTypeEnum.MANAGER,
        });
        if (inCompleteManagerReviews.length > 0) {
            throw new app_exception_1.default({
                message: `The reviewee already has an incomplete manager review to be done by you`,
            }, 'The reviewee already has an incomplete manager review to be done by you', 409);
        }
        const newReview = this.reviewFactoryUseCaseService.createReview({
            ...reviewDto,
            reviewType: review_type_enum_1.ReviewTypeEnum.MANAGER,
            reviewer: userId,
            reviewee: reviewDto.reviewee,
            progressStatus: review_progress_status_enum_1.ReviewProgressStatusEnum.PENDING,
        });
        const reviewee = await this.dataServices.user.getOne({
            id: reviewDto.reviewee,
        });
        newReview.subject = `Manager Review for ${reviewee.fullname}`;
        newReview.description = `Providing a manager review for ${reviewee.fullname}`;
        const createdReview = await this.dataServices.review.create(newReview);
        const questions = await this.dataServices.question.getAllWithoutPagination({
            questionType: question_type_enum_1.QuestionTypeEnum.MANAGER,
        });
        const questionnaires = await Promise.all(questions.map(async (question) => {
            const questionnaireDto = new questionnaire_dto_1.CreateQuestionnaireDto();
            questionnaireDto.review = createdReview.id;
            questionnaireDto.question = question.questionText.replace('XYZ', reviewee.fullname);
            return this.questionnaireFactroyUseCaseService.createQuestionnaire(questionnaireDto);
        }));
        await this.dataServices.questionnaire.createBulk(questionnaires);
        return createdReview;
    }
    async markReviewAsCompleted(reviewId) {
        const userId = this.cls.get('user')?.id;
        const review = await this.dataServices.review.getOne({ id: reviewId });
        const myTeam = await this.dataServices.team.getOneOrNull({
            leader: { id: userId },
        });
        if (!myTeam) {
            throw new app_exception_1.default({ message: `You are not a team leader` }, 'You are not a team leader', 400);
        }
        const teamMember = await this.dataServices.teamMember.getOneOrNull({
            team: { id: myTeam.id },
            member: { id: review.reviewee.id },
        });
        if (!teamMember) {
            throw new app_exception_1.default({ message: `The reviewee is not a member of your team` }, 'The reviewee is not a member of your team', 400);
        }
        if (review.progressStatus === review_progress_status_enum_1.ReviewProgressStatusEnum.COMPLETED) {
            throw new app_exception_1.default({ message: `Review already completed` }, 'Review already completed', 400);
        }
        if (review.progressStatus === review_progress_status_enum_1.ReviewProgressStatusEnum.PENDING) {
            throw new app_exception_1.default({ message: `The review is not submitted yet` }, 'The review is not submitted yet', 400);
        }
        if (review.reviewType === review_type_enum_1.ReviewTypeEnum.SELF) {
            const managerReviews = await this.dataServices.review.getAllWithoutPagination({
                reviewer: { id: userId },
                reviewee: { id: review.reviewee.id },
                reviewType: review_type_enum_1.ReviewTypeEnum.MANAGER,
            });
            const managerReview = managerReviews[managerReviews.length - 1];
            if (managerReview &&
                managerReview.progressStatus === review_progress_status_enum_1.ReviewProgressStatusEnum.COMPLETED) {
                const selfQuestionnaires = await this.dataServices.questionnaire.getAllWithoutPagination({
                    review: { id: review.id },
                });
                const managerQuestionnaires = await this.dataServices.questionnaire.getAllWithoutPagination({
                    review: { id: managerReview.id },
                });
                const summaryQuestionnaire = [];
                const averageRatings = [];
                for (let i = 0; i < managerQuestionnaires.length; i++) {
                    summaryQuestionnaire.push({
                        question: managerQuestionnaires[i].question,
                        managerFeedback: {
                            answers: managerQuestionnaires[i].answers,
                            ratings: managerQuestionnaires[i].ratings,
                        },
                        revieweeFeedback: {
                            answers: selfQuestionnaires[i].answers,
                            ratings: selfQuestionnaires[i].ratings,
                        },
                    });
                    averageRatings.push((managerQuestionnaires[i].ratings + selfQuestionnaires[i].ratings) /
                        2);
                }
                const finalAverageRatings = averageRatings.reduce((acc, curr) => acc + curr, 0) /
                    averageRatings.length;
                const createReviewSummaryDto = new review_summary_dto_1.CreateReviewSummaryDto();
                createReviewSummaryDto.reviewee = review.reviewee.id;
                createReviewSummaryDto.selfReview = review.id;
                createReviewSummaryDto.managerReview = managerReview.id;
                createReviewSummaryDto.summaryQuestionnaire = summaryQuestionnaire;
                createReviewSummaryDto.averagePerformanceRating = finalAverageRatings;
                createReviewSummaryDto.isAcknowledged = false;
                const newReviewSummary = this.userReviewSummaryFactoryUseCaseService.createReviewSummary(createReviewSummaryDto);
                await this.dataServices.reviewSummary.create(newReviewSummary);
            }
        }
        else if (review.reviewType === review_type_enum_1.ReviewTypeEnum.MANAGER) {
            const employeeSelfReviews = await this.dataServices.review.getAllWithoutPagination({
                reviewer: { id: review.reviewee.id },
                reviewee: { id: review.reviewee.id },
                reviewType: review_type_enum_1.ReviewTypeEnum.SELF,
            });
            const employeeSelfReview = employeeSelfReviews[employeeSelfReviews.length - 1];
            if (employeeSelfReview &&
                employeeSelfReview.progressStatus === review_progress_status_enum_1.ReviewProgressStatusEnum.COMPLETED) {
                const selfQuestionnaires = await this.dataServices.questionnaire.getAllWithoutPagination({
                    review: { id: employeeSelfReview.id },
                });
                const managerQuestionnaires = await this.dataServices.questionnaire.getAllWithoutPagination({
                    review: { id: review.id },
                });
                const summaryQuestionnaire = [];
                const averageRatings = [];
                for (let i = 0; i < managerQuestionnaires.length; i++) {
                    summaryQuestionnaire.push({
                        question: managerQuestionnaires[i].question,
                        managerFeedback: {
                            answers: managerQuestionnaires[i].answers,
                            ratings: managerQuestionnaires[i].ratings,
                        },
                        revieweeFeedback: {
                            answers: selfQuestionnaires[i].answers,
                            ratings: selfQuestionnaires[i].ratings,
                        },
                    });
                    averageRatings.push((managerQuestionnaires[i].ratings + selfQuestionnaires[i].ratings) /
                        2);
                }
                const finalAverageRatings = averageRatings.reduce((acc, curr) => acc + curr, 0) /
                    averageRatings.length;
                const createReviewSummaryDto = new review_summary_dto_1.CreateReviewSummaryDto();
                createReviewSummaryDto.reviewee = employeeSelfReview.reviewee.id;
                createReviewSummaryDto.selfReview = employeeSelfReview.id;
                createReviewSummaryDto.managerReview = review.id;
                createReviewSummaryDto.summaryQuestionnaire = summaryQuestionnaire;
                createReviewSummaryDto.averagePerformanceRating = finalAverageRatings;
                const newReviewSummary = this.userReviewSummaryFactoryUseCaseService.createReviewSummary(createReviewSummaryDto);
                await this.dataServices.reviewSummary.create(newReviewSummary);
            }
        }
        const reviewDto = new review_dto_1.ReviewDto();
        reviewDto.progressStatus = review_progress_status_enum_1.ReviewProgressStatusEnum.COMPLETED;
        const updatedReview = this.reviewFactoryUseCaseService.updateReviewProgessStatus(reviewDto);
        return await this.dataServices.review.update({ id: review.id }, updatedReview);
    }
    async submitReviewById(reviewId, updateQuestionnairesDto) {
        const { questionnaires } = updateQuestionnairesDto;
        if (!questionnaires.length) {
            throw new app_exception_1.default({ questionnaires: 'Questionnaires cannot be empty' }, 'Questionnaires cannot be empty', 400);
        }
        const review = await this.dataServices.review.getOne({ id: reviewId });
        if (review.progressStatus === review_progress_status_enum_1.ReviewProgressStatusEnum.SUBMITTED) {
            throw new app_exception_1.default({ message: 'Review already submitted' }, 'Review already submitted', 400);
        }
        await Promise.all(questionnaires.map(async (questionnaire) => {
            const editedQuestionnaire = this.userReviewQuestionnaireFactoryUseCaseService.updateQuestionnaire(questionnaire);
            return this.dataServices.questionnaire.update({ id: questionnaire.questionnaireId }, editedQuestionnaire);
        }));
        const reviewQuestionnaires = await this.dataServices.questionnaire.getAllWithoutPagination({
            review: { id: review.id },
        });
        const isIncompleteAnswers = reviewQuestionnaires.some((questionnaire) => {
            return questionnaire.answers.length === 0;
        });
        if (isIncompleteAnswers) {
            throw new app_exception_1.default({ message: `You have some incomplete answers` }, 'You have some incomplete answers', 400);
        }
        const reviewDto = new review_dto_1.ReviewDto();
        reviewDto.progressStatus = review_progress_status_enum_1.ReviewProgressStatusEnum.SUBMITTED;
        const updatedReview = this.reviewFactoryUseCaseService.updateReviewProgessStatus(reviewDto);
        return this.dataServices.review.update({ id: review.id }, updatedReview);
    }
};
exports.UserReviewUseCaseService = UserReviewUseCaseService;
exports.UserReviewUseCaseService = UserReviewUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        review_factory_use_case_service_1.ReviewFactoryUseCaseService,
        questionnaire_factory_use_case_service_1.QuestionnaireFactoryUseCaseService,
        user_review_questionnaire_factory_use_case_service_1.UserReviewQuestionnaireFactoryUseCaseService,
        user_review_summary_factory_use_case_service_1.UserReviewSummaryFactoryUseCaseService,
        cls_store_abstract_1.IClsStore])
], UserReviewUseCaseService);
//# sourceMappingURL=user-review-use-case.service.js.map