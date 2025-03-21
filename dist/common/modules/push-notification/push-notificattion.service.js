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
exports.PushNotificationService = exports.CreateNotificationDto = void 0;
const common_1 = require("@nestjs/common");
const app_exception_1 = require("../../../application/exception/app.exception");
const abstracts_1 = require("../../../core/abstracts");
const firebase_service_1 = require("../firebase/firebase.service");
const typeorm_1 = require("typeorm");
class CreateNotificationDto {
}
exports.CreateNotificationDto = CreateNotificationDto;
let PushNotificationService = class PushNotificationService {
    constructor(dataServices, firebaseService) {
        this.dataServices = dataServices;
        this.firebaseService = firebaseService;
    }
    async createNotification(dto) {
        try {
            const notification = await this.dataServices.notification.create({
                title: dto.title,
                body: dto.body,
                type: dto.type,
                isGlobal: dto.isGlobal,
                data: dto.data,
            });
            return notification;
        }
        catch (error) {
            console.log('Notification:: error ', error);
        }
    }
    async createNotificationForUsers(userIds, notification) {
        try {
            const userNotificationPromises = userIds.map((userId) => {
                return this.dataServices.userNotification.create({
                    user: {
                        id: +userId,
                    },
                    notification: notification,
                });
            });
            await Promise.all(userNotificationPromises);
        }
        catch (error) {
            console.log('Notification:: error ', error);
        }
    }
    async createNotificationForUser(userId, notification) {
        try {
            await this.dataServices.userNotification.create({
                user: {
                    id: +userId,
                },
                notification: notification,
            });
        }
        catch (error) {
            console.log('Notification:: error ', error);
        }
    }
    async createNotificationForAdmins(adminIds, notification) {
        try {
            const adminNotificationPromises = adminIds.map((adminId) => {
                console.log('admin is ', adminId);
                return this.dataServices.userNotification.create({
                    admin: {
                        id: +adminId,
                    },
                    notification: notification,
                });
            });
            await Promise.all(adminNotificationPromises);
        }
        catch (error) {
            console.log('Notification:: error ', error);
        }
    }
    async sendNotificationToAllUsers(title, body, options) {
        try {
            const userNotificationTokens = await this.dataServices.notificationToken.getAllWithoutPagination({
                user: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
            }, { user: true });
            const notification = await this.createNotification({
                title,
                body,
                type: 'notification',
                isGlobal: true,
                data: (options?.data || {}),
            });
            await this.createNotificationForUsers([
                ...new Set(userNotificationTokens.map((userToken) => userToken.user.id)),
            ], notification);
            const registrationTokens = userNotificationTokens.map((user) => user.fcmToken);
            for (let i = 0; i < registrationTokens.length; i++) {
                try {
                    await this.firebaseService.sendNotification(registrationTokens[i], notification, (options?.data || {}));
                }
                catch (err) {
                    console.log('sending error here', err);
                }
            }
        }
        catch (error) {
            console.log('Notification:: error', error);
        }
    }
    async sendNotificationToAllAdmins(title, body, options) {
        try {
            const adminNotificationTokens = await this.dataServices.notificationToken.getAllWithoutPagination({
                admin: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
            }, { admin: true });
            const notification = await this.createNotification({
                title,
                body,
                type: 'notification',
                isGlobal: true,
                data: (options?.data || {}),
            });
            await this.createNotificationForAdmins([
                ...new Set(adminNotificationTokens.map((adminToken) => adminToken.admin.id)),
            ], notification);
            const registrationTokens = adminNotificationTokens.map((admin) => admin.fcmToken);
            for (let i = 0; i < registrationTokens.length; i++) {
                try {
                    await this.firebaseService.sendNotification(registrationTokens[i], notification, (options?.data || {}));
                }
                catch (err) {
                    console.log('sending error here', err);
                }
            }
        }
        catch (error) {
            console.log('Notification:: error', error);
        }
    }
    async sendNotificationToSpecificUsers(title, body, userIds, options) {
        try {
            const userNotificationTokens = await this.dataServices.notificationToken.getAllWithoutPagination({
                user: {
                    id: (0, typeorm_1.In)(userIds),
                },
            });
            if (!userNotificationTokens.length) {
                throw new app_exception_1.default({}, 'No users exist for the provided ids', 404);
            }
            const notification = await this.createNotification({
                title,
                body,
                type: 'notification',
                isGlobal: false,
                data: (options?.data || {}),
            });
            await this.createNotificationForUsers(userIds, notification);
            const registrationTokens = userNotificationTokens.map((userToken) => userToken.fcmToken);
            for (let i = 0; i < registrationTokens.length; i++) {
                try {
                    await this.firebaseService.sendNotification(registrationTokens[i], notification, (options?.data || {}));
                }
                catch (err) {
                    console.log('sending error here', err);
                }
            }
        }
        catch (error) {
            console.log('Notification:: error', error);
        }
    }
    async sendNotificationToSpecificUser(title, body, userId, options) {
        try {
            const userNotificationToken = await this.dataServices.notificationToken.getOneOrNull({
                user: {
                    id: userId,
                },
            });
            if (!userNotificationToken) {
                throw new app_exception_1.default({}, 'No user exists for the provided id', 404);
            }
            const notification = await this.createNotification({
                title,
                body,
                type: 'notification',
                isGlobal: false,
                data: (options?.data || {}),
            });
            await this.createNotificationForUser(userId, notification);
            try {
                await this.firebaseService.sendNotification(userNotificationToken.fcmToken, notification, (options?.data || {}));
            }
            catch (err) {
                console.log('sending error here', err);
            }
        }
        catch (error) {
            console.log('Notification:: error', error);
        }
    }
    async sendTestNotification(dto) {
        return await this.firebaseService.sendNotification(dto.fcmToken, {
            title: 'Test notification',
            body: dto.message,
        });
    }
};
exports.PushNotificationService = PushNotificationService;
exports.PushNotificationService = PushNotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        firebase_service_1.FirebaseService])
], PushNotificationService);
//# sourceMappingURL=push-notificattion.service.js.map