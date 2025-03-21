"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_exception_1 = require("../../application/exception/app.exception");
const db_exception_parser_1 = require("./db-exception.parser");
const app_not_found_exception_1 = require("../../application/exception/app-not-found.exception");
const rescue = async (args) => {
    try {
        return (await args());
    }
    catch (e) {
        console.error(e);
        if (e instanceof app_exception_1.default || e instanceof app_not_found_exception_1.default) {
            throw e;
        }
        throw new app_exception_1.default((0, db_exception_parser_1.DbExceptionParser)(e));
    }
};
exports.default = rescue;
//# sourceMappingURL=rescue.helper.js.map