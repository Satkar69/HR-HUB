"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_exception_1 = require("./base.exception");
class AppNotFoundException extends base_exception_1.BaseException {
    constructor(message = 'Not Found', status = 404) {
        super([], message, status);
    }
}
exports.default = AppNotFoundException;
//# sourceMappingURL=app-not-found.exception.js.map