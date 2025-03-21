"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
class Code {
    static message(code) {
        switch (code) {
            case 200:
                return 'Success.';
            case 400:
                return 'Bad request.';
            case 401:
                return 'Unauthorized error.';
            case 402:
                return 'Wrong Credentials.';
            case 403:
                return 'Access denied.';
            case 500:
                return 'Internal error.';
            default:
                return 'Unknown error.';
        }
    }
}
exports.Code = Code;
Code.SUCCESS = {
    code: 200,
    message: 'Success.',
};
Code.BAD_REQUEST_ERROR = {
    code: 400,
    message: 'Bad request.',
};
Code.UNAUTHORIZED_ERROR = {
    code: 401,
    message: 'Unauthorized error.',
};
Code.WRONG_CREDENTIALS_ERROR = {
    code: 402,
    message: 'Wrong Credentials.',
};
Code.ACCESS_DENIED_ERROR = {
    code: 403,
    message: 'Access denied.',
};
Code.INTERNAL_ERROR = {
    code: 500,
    message: 'Internal error.',
};
Code.ENTITY_NOT_FOUND_ERROR = {
    code: 1000,
    message: 'Entity not found.',
};
Code.ENTITY_VALIDATION_ERROR = {
    code: 1001,
    message: 'Entity validation error.',
};
Code.USE_CASE_PORT_VALIDATION_ERROR = {
    code: 1002,
    message: 'Use-case port validation error.',
};
Code.VALUE_OBJECT_VALIDATION_ERROR = {
    code: 1003,
    message: 'Value object validation error.',
};
Code.ENTITY_ALREADY_EXISTS_ERROR = {
    code: 1004,
    message: 'Entity already exists.',
};
//# sourceMappingURL=code.js.map