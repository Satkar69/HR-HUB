"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_exception_1 = require("./base.exception");
class AppException extends base_exception_1.BaseException {
    constructor(appErrors = {}, message = 'Invalid data', status = 400) {
        if (typeof appErrors === 'string') {
            super([], appErrors, status);
            return;
        }
        const errorsMessages = Object.keys(appErrors).map((key) => {
            return {
                target: { key },
                property: key,
                constraints: {
                    key: appErrors[key],
                },
                value: key,
            };
        });
        super(errorsMessages, message, status);
    }
}
exports.default = AppException;
//# sourceMappingURL=app.exception.js.map