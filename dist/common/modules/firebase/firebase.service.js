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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _FirebaseService_db;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = require("firebase-admin");
const app_exception_1 = require("../../../application/exception/app.exception");
let FirebaseService = class FirebaseService {
    constructor(firebaseApp) {
        this.firebaseApp = firebaseApp;
        _FirebaseService_db.set(this, void 0);
        __classPrivateFieldSet(this, _FirebaseService_db, firebaseApp.firestore(), "f");
    }
    async sendNotification(token, notification, data) {
        try {
            console.log('notification', data);
            const message = {
                notification: {
                    title: notification.title,
                    body: notification.body,
                },
                data: (data ?? {}),
                token: token,
            };
            return await this.firebaseApp.messaging().send(message);
        }
        catch (er) {
            console.log(er);
            throw new app_exception_1.default({}, er.message, 401);
        }
    }
};
exports.FirebaseService = FirebaseService;
_FirebaseService_db = new WeakMap();
exports.FirebaseService = FirebaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FIREBASE_APP')),
    __metadata("design:paramtypes", [Object])
], FirebaseService);
//# sourceMappingURL=firebase.service.js.map