"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgAdminRepository = void 0;
const rescue_helper_1 = require("../../../../common/helpers/rescue.helper");
const pg_generic_repository_1 = require("../pg-generic-repository");
class PgAdminRepository extends pg_generic_repository_1.PgGenericRepository {
    constructor(cls, repository) {
        super(cls, repository);
    }
    async deleteById(id) {
        return (0, rescue_helper_1.default)(async () => {
            await this._repository.delete(id);
        });
    }
}
exports.PgAdminRepository = PgAdminRepository;
//# sourceMappingURL=admin.repository.js.map