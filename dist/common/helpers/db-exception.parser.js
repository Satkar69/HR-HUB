"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbExceptionParser = void 0;
const dubplicateKey = (e) => {
    const { detail } = e;
    const regex = /Key \((.*?)\)=\((.*?)\) already exists\./g;
    const match = regex.exec(detail);
    const [, key, value] = match;
    return {
        [key]: `${value} already exists`,
    };
};
const DbExceptionParser = (e) => {
    const { code } = e;
    switch (code) {
        case '23505':
            return dubplicateKey(e);
        default:
            return {
                message: e.message,
            };
    }
};
exports.DbExceptionParser = DbExceptionParser;
//# sourceMappingURL=db-exception.parser.js.map