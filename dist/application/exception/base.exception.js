"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = exports.reduceErrors = void 0;
const common_1 = require("@nestjs/common");
const errorFormater_utils_1 = require("../../common/utils/errorFormater.utils");
const reduceErrors = (errors) => {
    return errors?.reduce((obj, item) => {
        if (item.children?.length > 0) {
            obj[item.property] = reduceErrors(item.children);
        }
        else {
            obj[item.property] = (0, errorFormater_utils_1.formatErrorMessage)(Array.isArray(Object.values(item.constraints))
                ? Object.values(item.constraints)[0]
                : Object.values(item.constraints).toString());
        }
        return obj;
    }, {});
};
exports.reduceErrors = reduceErrors;
class BaseException extends common_1.HttpException {
    constructor(errors, message = 'Validation failed', statusCode = 400) {
        const errorsMessages = reduceErrors(errors);
        const responseDto = {
            statusCode,
            timestamp: new Date().toISOString(),
            message: message,
            error: errorsMessages,
            data: {},
        };
        super(responseDto, statusCode);
        this.errors = errors;
    }
}
exports.BaseException = BaseException;
//# sourceMappingURL=base.exception.js.map