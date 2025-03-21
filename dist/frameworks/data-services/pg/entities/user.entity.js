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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_role_enum_1 = require("../../../../common/enums/user-role.enum");
const team_entity_1 = require("./team.entity");
const team_member_entity_1 = require("./team-member.entity");
const review_entity_1 = require("./review.entity");
const peer_nomination_entity_1 = require("./peer-nomination.entity");
let UserEntity = class UserEntity extends base_entity_1.BaseEntity {
    toJSON() {
        return { ...this, password: undefined };
    }
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'full_name' }),
    __metadata("design:type", String)
], UserEntity.prototype, "fullname", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: user_role_enum_1.UserRoleEnum.EMPLOYEE, name: 'role' }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => team_entity_1.TeamEntity, (team) => team.leader),
    __metadata("design:type", Array)
], UserEntity.prototype, "teams", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => team_member_entity_1.TeamMemberEntity, (teamMember) => teamMember.member),
    __metadata("design:type", Array)
], UserEntity.prototype, "teamMemberShips", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.ReviewEntity, (review) => review.reviewer),
    __metadata("design:type", Array)
], UserEntity.prototype, "assignedReviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.ReviewEntity, (review) => review.reviewee),
    __metadata("design:type", Array)
], UserEntity.prototype, "receivedReviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => peer_nomination_entity_1.PeerNominationEntity, (peerNomination) => peerNomination.nominator),
    __metadata("design:type", Array)
], UserEntity.prototype, "initiatedPeerNominations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => peer_nomination_entity_1.PeerNominationEntity, (peerNomination) => peerNomination.nominee),
    __metadata("design:type", Array)
], UserEntity.prototype, "receivedPeerNominations", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UserEntity);
//# sourceMappingURL=user.entity.js.map