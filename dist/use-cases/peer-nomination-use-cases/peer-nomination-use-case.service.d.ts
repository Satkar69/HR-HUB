import { IDataServices } from 'src/core/abstracts';
export declare class PeerNominationUseCaseService {
    private readonly dataServices;
    constructor(dataServices: IDataServices);
    getPeerNominationById(peerNominationId: number): Promise<import("../../core/models/peer-nomination.model").PeerNominationModel>;
}
