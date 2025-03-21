import { HttpException as Exception } from '@nestjs/common';
import { ValidationError } from 'class-validator';
declare const reduceErrors: (errors: ValidationError[]) => object;
export { reduceErrors as reduceErrors };
export declare class BaseException extends Exception {
    private readonly errors;
    constructor(errors: ValidationError[], message?: string, statusCode?: number);
}
