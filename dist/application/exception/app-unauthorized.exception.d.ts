import { BaseException } from './base.exception';
export default class AppUnauthorizedException extends BaseException {
    constructor(message?: string, status?: number);
}
