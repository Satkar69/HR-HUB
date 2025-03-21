import { BaseException } from './base.exception';
export default class FileValidationException extends BaseException {
    constructor(message?: string, status?: number);
}
