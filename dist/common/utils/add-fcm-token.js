"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFcmToken = addFcmToken;
const notification_token_model_1 = require("../../core/models/notification-token.model");
const app_exception_1 = require("../../application/exception/app.exception");
async function addFcmToken(dataService, dto, admin, user) {
    if (!admin && !user) {
        throw new app_exception_1.default({}, 'User or Admin is required', 500);
    }
    const condition = {
        deviceId: dto.deviceId,
    };
    if (admin)
        condition.admin = { id: admin.id };
    else
        condition.user = { id: user.id };
    const existingDevice = await dataService.notificationToken.getOneOrNull(condition);
    if (existingDevice) {
        return await dataService.notificationToken.update({
            id: existingDevice.id,
        }, {
            fcmToken: dto.fcmToken,
        });
    }
    const newNotificationToken = new notification_token_model_1.NotificationTokenModel();
    newNotificationToken.deviceId = dto.deviceId;
    newNotificationToken.fcmToken = dto.fcmToken;
    newNotificationToken.deviceType = dto.deviceType;
    if (admin)
        newNotificationToken.admin = admin;
    else
        newNotificationToken.user = user;
    return await dataService.notificationToken.create(newNotificationToken);
}
//# sourceMappingURL=add-fcm-token.js.map