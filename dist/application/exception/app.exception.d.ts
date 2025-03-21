import { IError } from 'src/common/type/iError';
import { BaseException } from './base.exception';
export default class AppException extends BaseException {
    constructor(appErrors?: IError | string, message?: string, status?: number);
}
