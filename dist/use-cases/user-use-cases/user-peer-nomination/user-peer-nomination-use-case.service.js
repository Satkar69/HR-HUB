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
exports.UserPeerNominationUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../core/abstracts");
const user_peer_nomination_factory_use_case_service_1 = require("./user-peer-nomination-factory-use-case.service");
const cls_store_abstract_1 = require("../../../core/abstracts/adapters/cls-store.abstract");
const peer_nomination_status_enum_1 = require("../../../common/enums/peer-nomination-status.enum");
const review_factory_use_case_service_1 = require("../../review-use-cases/review-factory-use-case.service");
const questionnaire_factory_use_case_service_1 = require("../../questioninaire-use-cases/questionnaire-factory-use-case.service");
const app_exception_1 = require("../../../application/exception/app.exception");
const review_dto_1 = require("../../../core/dtos/request/review.dto");
const review_type_enum_1 = require("../../../common/enums/review-type.enum");
const review_progress_status_enum_1 = require("../../../common/enums/review-progress-status.enum");
const question_type_enum_1 = require("../../../common/enums/question-type.enum");
const questionnaire_dto_1 = require("../../../core/dtos/request/questionnaire.dto");
const app_unauthorized_exception_1 = require("../../../application/exception/app-unauthorized.exception");
let UserPeerNominationUseCaseService = class UserPeerNominationUseCaseService {
    constructor(dataServices, userPeerNominationFactoryUseCaseService, reviewFactoryUseCaseService, questionnaireFactoryUseCaseService, cls) {
        this.dataServices = dataServices;
        this.userPeerNominationFactoryUseCaseService = userPeerNominationFactoryUseCaseService;
        this.reviewFactoryUseCaseService = reviewFactoryUseCaseService;
        this.questionnaireFactoryUseCaseService = questionnaireFactoryUseCaseService;
        this.cls = cls;
    }
    async createPeerNomination(peerNominationDto) {
        const userId = this.cls.get('user')?.id;
        const existingPeerNomination = await this.dataServices.peerNomination.getOneOrNull({
            nominee: { id: peerNominationDto.nominee },
            nominationStatus: peer_nomination_status_enum_1.PeerNominationStatusEnum.PENDING,
        });
        if (existingPeerNomination) {
            throw new app_exception_1.default({ message: 'The employee already has a pending peer nomination' }, 'The employee already has a pending peer nomination', 400);
        }
        const existingPeerReview = await this.dataServices.review.getOneOrNull({
            reviewer: { id: peerNominationDto.nominee },
        });
        if (existingPeerReview) {
            throw new app_exception_1.default({ message: 'The employee already has an incomplete peer review' }, 'The employee already has an incomplete peer review', 400);
        }
        const newPeerNomination = this.userPeerNominationFactoryUseCaseService.createPeerNomination({
            ...peerNominationDto,
            nominator: userId,
            nominationStatus: peer_nomination_status_enum_1.PeerNominationStatusEnum.PENDING,
        });
        return this.dataServices.peerNomination.create(newPeerNomination);
    }
    async getAssignedPeerNomination() {
        const userId = this.cls.get('user')?.id;
        const peerNomination = await this.dataServices.peerNomination.getOne({
            nominee: { id: userId },
        });
        return peerNomination;
    }
    async getCreatedPeerMominations() {
        const userId = this.cls.get('user')?.id;
        const peerNominations = await this.dataServices.peerNomination.getAllWithoutPagination({
            nominator: { id: userId },
        });
        return peerNominations;
    }
    async assignedPeerNominationStatusAction(peerNominationId, updatePeerNominationStatusDto) {
        const userId = this.cls.get('user')?.id;
        const peerNomination = await this.dataServices.peerNomination.getOneOrNull({
            nominee: { id: userId },
        });
        if (!peerNomination) {
            throw new app_unauthorized_exception_1.default('You are not nominee for this peer nomination');
        }
        if (peerNomination.nominationStatus === peer_nomination_status_enum_1.PeerNominationStatusEnum.ACCEPTED ||
            peerNomination.nominationStatus === peer_nomination_status_enum_1.PeerNominationStatusEnum.DECLINED) {
            throw new app_exception_1.default({
                message: 'You cannot change the peer nomination status once accepted or declined',
            }, 'You cannot change the peer nomination status once accepted or declined', 400);
        }
        const updatedPeerNominationStatus = this.userPeerNominationFactoryUseCaseService.updatePeerNominationStatus(updatePeerNominationStatusDto);
        const updatedPeerNomination = await this.dataServices.peerNomination.update({ id: peerNominationId }, updatedPeerNominationStatus);
        if (updatedPeerNomination.nominationStatus ===
            peer_nomination_status_enum_1.PeerNominationStatusEnum.ACCEPTED) {
            const reviewDto = new review_dto_1.ReviewDto();
            const twoWeekFromNow = new Date();
            reviewDto.reviewType = review_type_enum_1.ReviewTypeEnum.PEER;
            reviewDto.reviewer = updatedPeerNomination.nominee.id;
            reviewDto.reviewee = updatedPeerNomination.reviewee.id;
            reviewDto.subject = `Peer Review for ${updatedPeerNomination.reviewee.fullname} by ${updatedPeerNomination.nominee.fullname}`;
            reviewDto.description = `Please provide a peer review for ${updatedPeerNomination.reviewee.fullname}`;
            reviewDto.progressStatus = review_progress_status_enum_1.ReviewProgressStatusEnum.PENDING;
            twoWeekFromNow.setDate(twoWeekFromNow.getDate() + 14);
            reviewDto.dueDate = twoWeekFromNow;
            const newReview = this.reviewFactoryUseCaseService.createReview(reviewDto);
            const createdReview = await this.dataServices.review.create(newReview);
            const questions = await this.dataServices.question.getAllWithoutPagination({
                questionType: question_type_enum_1.QuestionTypeEnum.PEER,
            });
            const questionnaires = await Promise.all(questions.map(async (question) => {
                const questionnaireDto = new questionnaire_dto_1.CreateQuestionnaireDto();
                questionnaireDto.review = createdReview.id;
                questionnaireDto.question = question.questionText.replace('XYZ', updatedPeerNomination.reviewee.fullname);
                return this.questionnaireFactoryUseCaseService.createQuestionnaire(questionnaireDto);
            }));
            await this.dataServices.questionnaire.createBulk(questionnaires);
        }
        return updatedPeerNomination;
    }
};
exports.UserPeerNominationUseCaseService = UserPeerNominationUseCaseService;
exports.UserPeerNominationUseCaseService = UserPeerNominationUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        user_peer_nomination_factory_use_case_service_1.UserPeerNominationFactoryUseCaseService,
        review_factory_use_case_service_1.ReviewFactoryUseCaseService,
        questionnaire_factory_use_case_service_1.QuestionnaireFactoryUseCaseService,
        cls_store_abstract_1.IClsStore])
], UserPeerNominationUseCaseService);
//# sourceMappingURL=user-peer-nomination-use-case.service.js.map