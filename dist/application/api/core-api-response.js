"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreWsResponse = exports.CoreApiResponse = void 0;
const app_pagination_1 = require("../../common/interface/response/app-pagination");
const app_response_1 = require("../../common/interface/response/app-response");
class CoreApiResponse {
    static success(data, statusCode = 200, message = 'success') {
        return new app_response_1.AppResponse({
            data: data,
            statusCode,
            message,
        });
    }
    static pagination(paginationData, query, statusCode = 200, message = 'success') {
        return new app_pagination_1.AppPagination({
            ...paginationData,
            ...query,
            statusCode,
            message: message,
        });
    }
}
exports.CoreApiResponse = CoreApiResponse;
class CoreWsResponse {
    static success(data) {
        return {
            data,
            timestamp: new Date().toISOString(),
        };
    }
}
exports.CoreWsResponse = CoreWsResponse;
//# sourceMappingURL=core-api-response.js.map