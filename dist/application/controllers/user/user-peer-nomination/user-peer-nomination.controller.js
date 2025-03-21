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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPeerNominationController = void 0;
const common_1 = require("@nestjs/common");
const core_api_response_1 = require("../../../api/core-api-response");
const manager_decorator_1 = require("../../../decorators/manager.decorator");
const peer_nomination_dto_1 = require("../../../../core/dtos/request/peer-nomination.dto");
const user_peer_nomination_use_case_service_1 = require("../../../../use-cases/user-use-cases/user-peer-nomination/user-peer-nomination-use-case.service");
let UserPeerNominationController = class UserPeerNominationController {
    constructor(userPeerNominationUseCaseService) {
        this.userPeerNominationUseCaseService = userPeerNominationUseCaseService;
    }
    async createPeerNomination(peerNominationDto) {
        return core_api_response_1.CoreApiResponse.success(await this.userPeerNominationUseCaseService.createPeerNomination(peerNominationDto));
    }
    async getAssignedPeerNomination() {
        return core_api_response_1.CoreApiResponse.success(await this.userPeerNominationUseCaseService.getAssignedPeerNomination());
    }
    async getAllCreatedPeerNomination() {
        return core_api_response_1.CoreApiResponse.success(await this.userPeerNominationUseCaseService.getCreatedPeerMominations());
    }
    async updateAssignedPeerNominationStatus(peerNominationId, updatePeerNominationStatusDto) {
        return core_api_response_1.CoreApiResponse.success(await this.userPeerNominationUseCaseService.assignedPeerNominationStatusAction(peerNominationId, updatePeerNominationStatusDto));
    }
};
exports.UserPeerNominationController = UserPeerNominationController;
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [peer_nomination_dto_1.PeerNominationDto]),
    __metadata("design:returntype", Promise)
], UserPeerNominationController.prototype, "createPeerNomination", null);
__decorate([
    (0, common_1.Get)('/assigned/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserPeerNominationController.prototype, "getAssignedPeerNomination", null);
__decorate([
    (0, manager_decorator_1.Manager)(),
    (0, common_1.Get)('/created/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserPeerNominationController.prototype, "getAllCreatedPeerNomination", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, peer_nomination_dto_1.UpdatePeerNominationStatusDto]),
    __metadata("design:returntype", Promise)
], UserPeerNominationController.prototype, "updateAssignedPeerNominationStatus", null);
exports.UserPeerNominationController = UserPeerNominationController = __decorate([
    (0, common_1.Controller)('/peer-nomination'),
    __metadata("design:paramtypes", [user_peer_nomination_use_case_service_1.UserPeerNominationUseCaseService])
], UserPeerNominationController);
//# sourceMappingURL=user-peer-nomination.controller.js.map