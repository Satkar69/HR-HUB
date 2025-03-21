"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const hashPassword = (password) => {
    return bcrypt.hashSync(password, 12);
};
exports.hashPassword = hashPassword;
//# sourceMappingURL=encryption.utils.js.map