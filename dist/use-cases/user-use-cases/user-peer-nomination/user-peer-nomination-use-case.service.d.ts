import { IDataServices } from 'src/core/abstracts';
import { PeerNominationDto, UpdatePeerNominationStatusDto } from 'src/core/dtos/request/peer-nomination.dto';
import { UserPeerNominationFactoryUseCaseService } from './user-peer-nomination-factory-use-case.service';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { ReviewFactoryUseCaseService } from 'src/use-cases/review-use-cases/review-factory-use-case.service';
import { QuestionnaireFactoryUseCaseService } from 'src/use-cases/questioninaire-use-cases/questionnaire-factory-use-case.service';
export declare class UserPeerNominationUseCaseService {
    private dataServices;
    private userPeerNominationFactoryUseCaseService;
    private reviewFactoryUseCaseService;
    private questionnaireFactoryUseCaseService;
    private readonly cls;
    constructor(dataServices: IDataServices, userPeerNominationFactoryUseCaseService: UserPeerNominationFactoryUseCaseService, reviewFactoryUseCaseService: ReviewFactoryUseCaseService, questionnaireFactoryUseCaseService: QuestionnaireFactoryUseCaseService, cls: IClsStore<AppClsStore>);
    createPeerNomination(peerNominationDto: PeerNominationDto): Promise<import("../../../core/models/peer-nomination.model").PeerNominationModel>;
    getAssignedPeerNomination(): Promise<import("../../../core/models/peer-nomination.model").PeerNominationModel>;
    getCreatedPeerMominations(): Promise<import("../../../core/models/peer-nomination.model").PeerNominationModel[]>;
    assignedPeerNominationStatusAction(peerNominationId: number, updatePeerNominationStatusDto: UpdatePeerNominationStatusDto): Promise<import("../../../core/models/peer-nomination.model").PeerNominationModel>;
}
