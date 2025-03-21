"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const base_exception_1 = require("./base.exception");
class ValidationException extends base_exception_1.BaseException {
    constructor(errors) {
        super(errors);
    }
}
exports.ValidationException = ValidationException;
//# sourceMappingURL=validation.exception.js.map