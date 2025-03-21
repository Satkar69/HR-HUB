import { BaseException } from './base.exception';
export default class AppNotFoundException extends BaseException {
    constructor(message?: string, status?: number);
}
