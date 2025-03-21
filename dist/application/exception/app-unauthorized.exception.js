"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_exception_1 = require("./base.exception");
class AppUnauthorizedException extends base_exception_1.BaseException {
    constructor(message = 'Unauthorized', status = 401) {
        super([], message, status);
    }
}
exports.default = AppUnauthorizedException;
//# sourceMappingURL=app-unauthorized.exception.js.map