import { PeerNominationDto, UpdatePeerNominationStatusDto } from 'src/core/dtos/request/peer-nomination.dto';
import { UserPeerNominationUseCaseService } from 'src/use-cases/user-use-cases/user-peer-nomination/user-peer-nomination-use-case.service';
export declare class UserPeerNominationController {
    private userPeerNominationUseCaseService;
    constructor(userPeerNominationUseCaseService: UserPeerNominationUseCaseService);
    createPeerNomination(peerNominationDto: PeerNominationDto): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/peer-nomination.model").PeerNominationModel>>;
    getAssignedPeerNomination(): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/peer-nomination.model").PeerNominationModel>>;
    getAllCreatedPeerNomination(): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/peer-nomination.model").PeerNominationModel[]>>;
    updateAssignedPeerNominationStatus(peerNominationId: number, updatePeerNominationStatusDto: UpdatePeerNominationStatusDto): Promise<import("../../../../common/interface/response/app-response").AppResponse<import("../../../../core/models/peer-nomination.model").PeerNominationModel>>;
}
