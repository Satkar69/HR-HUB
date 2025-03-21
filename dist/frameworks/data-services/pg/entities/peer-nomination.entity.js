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
exports.PeerNominationEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
const peer_nomination_status_enum_1 = require("../../../../common/enums/peer-nomination-status.enum");
let PeerNominationEntity = class PeerNominationEntity extends base_entity_1.BaseEntity {
};
exports.PeerNominationEntity = PeerNominationEntity;
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'nominator_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PeerNominationEntity.prototype, "nominator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'nominee_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PeerNominationEntity.prototype, "nominee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'reviewee_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PeerNominationEntity.prototype, "reviewee", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nomination_status',
        nullable: false,
        default: peer_nomination_status_enum_1.PeerNominationStatusEnum.PENDING,
    }),
    __metadata("design:type", String)
], PeerNominationEntity.prototype, "nominationStatus", void 0);
exports.PeerNominationEntity = PeerNominationEntity = __decorate([
    (0, typeorm_1.Entity)('peer_nominations')
], PeerNominationEntity);
//# sourceMappingURL=peer-nomination.entity.js.map