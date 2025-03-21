"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.IS_MANAGER_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_MANAGER_KEY = 'isManager';
const Manager = () => (0, common_1.SetMetadata)(exports.IS_MANAGER_KEY, true);
exports.Manager = Manager;
//# sourceMappingURL=manager.decorator.js.map