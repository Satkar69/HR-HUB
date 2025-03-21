import { PeerNominationUseCaseService } from 'src/use-cases/peer-nomination-use-cases/peer-nomination-use-case.service';
export declare class PeerNominationController {
    private readonly peerNominationUseCaseService;
    constructor(peerNominationUseCaseService: PeerNominationUseCaseService);
    getPeerNomination(peerNominationId: number): Promise<import("../../../common/interface/response/app-response").AppResponse<import("../../../core/models/peer-nomination.model").PeerNominationModel>>;
}
