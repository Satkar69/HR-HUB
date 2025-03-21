"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerNominationControllerModule = void 0;
const common_1 = require("@nestjs/common");
const peer_nomination_use_case_module_1 = require("../../../use-cases/peer-nomination-use-cases/peer-nomination-use-case.module");
const peer_nomination_controller_1 = require("./peer-nomination.controller");
let PeerNominationControllerModule = class PeerNominationControllerModule {
};
exports.PeerNominationControllerModule = PeerNominationControllerModule;
exports.PeerNominationControllerModule = PeerNominationControllerModule = __decorate([
    (0, common_1.Module)({
        imports: [peer_nomination_use_case_module_1.PeerNominationUseCaseModule],
        controllers: [peer_nomination_controller_1.PeerNominationController],
    })
], PeerNominationControllerModule);
//# sourceMappingURL=peer-nomination-controller.module.js.map