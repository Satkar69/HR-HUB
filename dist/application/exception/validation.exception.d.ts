import { ValidationError } from 'class-validator';
import { BaseException } from './base.exception';
export declare class ValidationException extends BaseException {
    constructor(errors: ValidationError[]);
}
