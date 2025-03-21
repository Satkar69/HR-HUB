"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPeerNominationFactoryUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const peer_nomination_model_1 = require("../../../core/models/peer-nomination.model");
const user_model_1 = require("../../../core/models/user.model");
let UserPeerNominationFactoryUseCaseService = class UserPeerNominationFactoryUseCaseService {
    createPeerNomination(peerNominationDto) {
        const peerNominationModel = new peer_nomination_model_1.PeerNominationModel();
        if (peerNominationDto.nominator) {
            const userModel = new user_model_1.UserModel();
            userModel.id = peerNominationDto.nominator;
            peerNominationModel.nominator = userModel;
        }
        if (peerNominationDto.nominee) {
            const userModel = new user_model_1.UserModel();
            userModel.id = peerNominationDto.nominee;
            peerNominationModel.nominee = userModel;
        }
        if (peerNominationDto.reviewee) {
            const userModel = new user_model_1.UserModel();
            userModel.id = peerNominationDto.reviewee;
            peerNominationModel.reviewee = userModel;
        }
        if (peerNominationDto.nominationStatus)
            peerNominationModel.nominationStatus = peerNominationDto.nominationStatus;
        return peerNominationModel;
    }
    updatePeerNominationStatus(updatePeerNominationStatusDto) {
        const peerNominationModel = new peer_nomination_model_1.PeerNominationModel();
        if (updatePeerNominationStatusDto.nominationStatus)
            peerNominationModel.nominationStatus =
                updatePeerNominationStatusDto.nominationStatus;
        return peerNominationModel;
    }
};
exports.UserPeerNominationFactoryUseCaseService = UserPeerNominationFactoryUseCaseService;
exports.UserPeerNominationFactoryUseCaseService = UserPeerNominationFactoryUseCaseService = __decorate([
    (0, common_1.Injectable)()
], UserPeerNominationFactoryUseCaseService);
//# sourceMappingURL=user-peer-nomination-factory-use-case.service.js.map