"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_exception_1 = require("./base.exception");
class FileValidationException extends base_exception_1.BaseException {
    constructor(message = 'Validation failed', status = 400) {
        super([], message, status);
    }
}
exports.default = FileValidationException;
//# sourceMappingURL=file-validation.exception.js.map