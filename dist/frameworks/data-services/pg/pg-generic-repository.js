"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgGenericRepository = void 0;
const app_not_found_exception_1 = require("../../../application/exception/app-not-found.exception");
const rescue_helper_1 = require("../../../common/helpers/rescue.helper");
class PgGenericRepository {
    constructor(cls, repository) {
        this.cls = cls;
        this._repository = repository;
    }
    async getAll(condition, relations, order, select) {
        return (0, rescue_helper_1.default)(async () => {
            let { page, limit } = this.cls.get('paginationQuery');
            if (!page)
                page = 1;
            if (!limit)
                limit = 10;
            const [data, total] = await this._repository.findAndCount({
                where: Array.isArray(condition) ? [...condition] : condition,
                skip: ((page || 1) - 1) * (limit || 10),
                take: limit || 10,
                relations: { ...relations },
                order: order ? { ...order } : { id: 'DESC' },
                select: select,
            });
            return {
                data: data,
                total,
                limit: limit || 10,
                page: page || 1,
                previous: page > 1 ? `${Number(page) - 1}` : null,
                next: page * limit < total ? `${Number(page) + 1}` : null,
            };
        });
    }
    async getAllWithoutPagination(condition, relations) {
        return (0, rescue_helper_1.default)(async () => {
            return this._repository.find({
                where: condition,
                relations: { ...relations },
            });
        });
    }
    async getOne(condition, relations) {
        return (0, rescue_helper_1.default)(async () => {
            const item = await this._repository.findOne({
                where: condition,
                relations: { ...relations },
            });
            if (item) {
                return item;
            }
            else {
                throw new app_not_found_exception_1.default(this._repository.metadata.targetName.replace('Entity', '') +
                    ' not found', 404);
            }
        });
    }
    async getOneOrNull(condition, relations, options) {
        return (0, rescue_helper_1.default)(async () => {
            const item = await this._repository.findOne({
                where: condition,
                relations: { ...relations },
                ...options,
            });
            if (item) {
                return item;
            }
            return null;
        });
    }
    async create(item) {
        return (0, rescue_helper_1.default)(async () => {
            return this._repository.save(item);
        });
    }
    async createBulk(item) {
        return (0, rescue_helper_1.default)(async () => {
            return this._repository.save(item);
        });
    }
    async update(condition, item) {
        return (0, rescue_helper_1.default)(async () => {
            const oldItem = await this.getOne(condition);
            if (!oldItem) {
                throw new app_not_found_exception_1.default(this._repository.metadata.targetName.replace('Entity', '') +
                    ' not found', 404);
            }
            await this._repository.update(condition, item);
            return this._repository.findOneBy(condition);
        });
    }
    async updateMany(condition, item) {
        return (0, rescue_helper_1.default)(async () => {
            const updateResult = await this._repository.update(condition, item);
            return updateResult;
        });
    }
    async findOrCreate(condition, item, relations) {
        return (0, rescue_helper_1.default)(async () => {
            const oldItem = await this._repository.findOne({
                where: condition,
                relations: { ...relations },
            });
            if (!oldItem) {
                return this._repository.save(item);
            }
            return oldItem;
        });
    }
    async createOrUpdate(condition, item, relations) {
        const oldItem = await this._repository.findOne({
            where: condition,
            relations: { ...relations },
        });
        if (!oldItem) {
            return this._repository.save(item);
        }
        const updatedItem = this._repository.merge(oldItem, item);
        return await this._repository.save(updatedItem);
    }
    async remove(condition, relations) {
        return (0, rescue_helper_1.default)(async () => {
            const event = await this.getAllWithoutPagination(condition, relations);
            return this._repository.softRemove(event);
        });
    }
    async delete(condition, relations) {
        return (0, rescue_helper_1.default)(async () => {
            const event = await this.getAllWithoutPagination(condition, relations);
            return this._repository.remove(event);
        });
    }
}
exports.PgGenericRepository = PgGenericRepository;
//# sourceMappingURL=pg-generic-repository.js.map