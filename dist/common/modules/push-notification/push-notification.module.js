"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../../services/data-services/data-services.module");
const firebase_module_1 = require("../firebase/firebase.module");
const push_notificattion_service_1 = require("./push-notificattion.service");
let PushNotificationModule = class PushNotificationModule {
};
exports.PushNotificationModule = PushNotificationModule;
exports.PushNotificationModule = PushNotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule, firebase_module_1.FirebaseModule],
        providers: [push_notificattion_service_1.PushNotificationService],
        exports: [push_notificattion_service_1.PushNotificationService],
    })
], PushNotificationModule);
//# sourceMappingURL=push-notification.module.js.map