"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.IS_USER_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_USER_KEY = 'isUser';
const User = () => (0, common_1.SetMetadata)(exports.IS_USER_KEY, true);
exports.User = User;
//# sourceMappingURL=user.decorator.js.map