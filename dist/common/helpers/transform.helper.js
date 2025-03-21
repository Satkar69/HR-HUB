"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformObjectToClass = transformObjectToClass;
const class_transformer_1 = require("class-transformer");
function transformObjectToClass(sourceObject, targetClass) {
    return (0, class_transformer_1.plainToInstance)(targetClass, sourceObject, {
        enableImplicitConversion: false,
        excludeExtraneousValues: true,
    });
}
//# sourceMappingURL=transform.helper.js.map