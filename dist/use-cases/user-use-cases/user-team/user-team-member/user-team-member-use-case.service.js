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
exports.UserTeamMemberUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../../core/abstracts");
const cls_store_abstract_1 = require("../../../../core/abstracts/adapters/cls-store.abstract");
let UserTeamMemberUseCaseService = class UserTeamMemberUseCaseService {
    constructor(dataServices, cls) {
        this.dataServices = dataServices;
        this.cls = cls;
    }
    async getMyTeamMembers() {
        const userId = this.cls.get('user')?.id;
        return await this.dataServices.teamMember.getAll({
            team: { leader: { id: userId } },
        });
    }
};
exports.UserTeamMemberUseCaseService = UserTeamMemberUseCaseService;
exports.UserTeamMemberUseCaseService = UserTeamMemberUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        cls_store_abstract_1.IClsStore])
], UserTeamMemberUseCaseService);
//# sourceMappingURL=user-team-member-use-case.service.js.map