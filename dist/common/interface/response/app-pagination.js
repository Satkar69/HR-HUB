"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPagination = void 0;
class AppPagination {
    constructor(paginationResults) {
        this.statusCode = paginationResults.statusCode || 200;
        this.message = paginationResults.message || 'OK';
        this.data = paginationResults.data;
        const page = +paginationResults.page || 1;
        const limit = +paginationResults.limit || 10;
        const total_pages = Math.ceil(paginationResults.total / limit);
        this.meta = {
            limit: limit,
            total: paginationResults.total,
            page_total: paginationResults.data.length,
            total_pages: total_pages,
            next: page < total_pages ? page + 1 : null,
            page: page,
            previous: page > 1 && page <= total_pages ? page - 1 : null,
        };
    }
}
exports.AppPagination = AppPagination;
//# sourceMappingURL=app-pagination.js.map