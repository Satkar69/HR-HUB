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
exports.UserTeamUseCaseService = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../core/abstracts");
const cls_store_abstract_1 = require("../../../core/abstracts/adapters/cls-store.abstract");
const user_role_enum_1 = require("../../../common/enums/user-role.enum");
const app_exception_1 = require("../../../application/exception/app.exception");
let UserTeamUseCaseService = class UserTeamUseCaseService {
    constructor(dataServices, cls) {
        this.dataServices = dataServices;
        this.cls = cls;
    }
    async getMyTeam() {
        const userId = this.cls.get('user')?.id;
        const user = await this.dataServices.user.getOne({ id: userId });
        if (user.role === user_role_enum_1.UserRoleEnum.EMPLOYEE) {
            const teamMembership = await this.dataServices.teamMember.getOneOrNull({
                member: { id: user.id },
            }, { team: true });
            if (!teamMembership) {
                throw new app_exception_1.default({ message: `You are not a member of any team` }, 'You are not a member of any team', 404);
            }
            const team = await this.dataServices.team.getOne({
                id: teamMembership.team.id,
            });
            const teamMembers = await this.dataServices.teamMember.getAllWithoutPagination({
                team: { id: team.id },
            });
            return { ...team, members: teamMembers };
        }
        const team = await this.dataServices.team.getOneOrNull({
            leader: { id: user.id },
        });
        if (!team) {
            throw new app_exception_1.default({ message: `You are not assigned to any team as a leader` }, 'You are not assigned to any team as a leader', 404);
        }
        const teamMembers = await this.dataServices.teamMember.getAllWithoutPagination({
            team: { id: team.id },
        });
        return { ...team, members: teamMembers };
    }
};
exports.UserTeamUseCaseService = UserTeamUseCaseService;
exports.UserTeamUseCaseService = UserTeamUseCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        cls_store_abstract_1.IClsStore])
], UserTeamUseCaseService);
//# sourceMappingURL=user-team-use-case.service.js.map