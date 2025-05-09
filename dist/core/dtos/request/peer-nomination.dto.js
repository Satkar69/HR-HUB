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
exports.UpdatePeerNominationStatusDto = exports.PeerNominationDto = void 0;
const class_validator_1 = require("class-validator");
const peer_nomination_status_enum_1 = require("../../../common/enums/peer-nomination-status.enum");
class PeerNominationDto {
}
exports.PeerNominationDto = PeerNominationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PeerNominationDto.prototype, "nominator", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PeerNominationDto.prototype, "nominee", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PeerNominationDto.prototype, "reviewee", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(peer_nomination_status_enum_1.PeerNominationStatusEnum),
    __metadata("design:type", String)
], PeerNominationDto.prototype, "nominationStatus", void 0);
class UpdatePeerNominationStatusDto {
}
exports.UpdatePeerNominationStatusDto = UpdatePeerNominationStatusDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(peer_nomination_status_enum_1.PeerNominationStatusEnum),
    __metadata("design:type", String)
], UpdatePeerNominationStatusDto.prototype, "nominationStatus", void 0);
//# sourceMappingURL=peer-nomination.dto.js.map