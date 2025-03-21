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
exports.TeamMemberEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const team_entity_1 = require("./team.entity");
const user_entity_1 = require("./user.entity");
let TeamMemberEntity = class TeamMemberEntity extends base_entity_1.BaseEntity {
};
exports.TeamMemberEntity = TeamMemberEntity;
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.TeamEntity),
    (0, typeorm_1.JoinColumn)({ name: 'team_id' }),
    __metadata("design:type", team_entity_1.TeamEntity)
], TeamMemberEntity.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], TeamMemberEntity.prototype, "member", void 0);
exports.TeamMemberEntity = TeamMemberEntity = __decorate([
    (0, typeorm_1.Entity)('team_member'),
    (0, typeorm_1.Unique)(['member'])
], TeamMemberEntity);
//# sourceMappingURL=team-member.entity.js.map