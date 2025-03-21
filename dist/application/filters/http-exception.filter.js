"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HttpExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const base_exception_1 = require("../exception/base.exception");
let HttpExceptionFilter = HttpExceptionFilter_1 = class HttpExceptionFilter {
    catch(error, host) {
        const request = host.switchToHttp().getRequest();
        const response = host.switchToHttp().getResponse();
        let statusCode = 500;
        console.log('error ', error);
        console.log('body ', request.body);
        if (error instanceof base_exception_1.BaseException) {
            statusCode = error.getStatus();
            response.status(error.getStatus()).json(error.getResponse());
        }
        else {
            if (error instanceof common_1.HttpException) {
                statusCode = error.getStatus();
            }
            if (error instanceof common_1.NotFoundException) {
                error.message = 'Invalid URL';
            }
            else if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
                handleJwtError(error);
                statusCode = 401;
            }
            response.status(statusCode || 400).json({
                statusCode: statusCode,
                timestamp: new Date().toISOString(),
                message: error.message,
                data: {},
            });
        }
        const requestStartDate = Date.now();
        const requestFinishDate = Date.now();
        const message = `Method: ${request.method}; ` +
            `Status: ${statusCode}; ` +
            `Path: ${request.path}; ` +
            `SpentTime: ${requestFinishDate - requestStartDate}ms`;
        common_1.Logger.error(message, HttpExceptionFilter_1.name);
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = HttpExceptionFilter_1 = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);
function handleJwtError(error) {
    if (error instanceof jsonwebtoken_1.TokenExpiredError) {
        error.message = 'Token Expired';
    }
    if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
        error.message = 'Invalid Token';
    }
}
//# sourceMappingURL=http-exception.filter.js.map