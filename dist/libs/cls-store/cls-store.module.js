"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClsServiceModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_cls_1 = require("nestjs-cls");
const cls_store_abstract_1 = require("../../core/abstracts/adapters/cls-store.abstract");
const cls_store_service_1 = require("./cls-store.service");
let ClsServiceModule = class ClsServiceModule {
};
exports.ClsServiceModule = ClsServiceModule;
exports.ClsServiceModule = ClsServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_cls_1.ClsModule.forRoot({
                global: true,
                guard: {
                    mount: true,
                    setup: (cls, context) => {
                        const req = context.switchToHttp().getRequest();
                        cls.set('paginationQuery', req.query);
                    },
                },
            }),
        ],
        providers: [
            {
                provide: cls_store_abstract_1.IClsStore,
                useClass: cls_store_service_1.ClsStoreService,
            },
        ],
        exports: [cls_store_abstract_1.IClsStore],
    })
], ClsServiceModule);
//# sourceMappingURL=cls-store.module.js.map