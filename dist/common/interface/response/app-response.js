"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResponse = void 0;
class AppResponse {
    constructor(paginationResults) {
        this.statusCode = paginationResults.statusCode;
        this.timestamp = new Date();
        this.message = paginationResults.message;
        this.data = paginationResults.data;
    }
}
exports.AppResponse = AppResponse;
//# sourceMappingURL=app-response.js.map