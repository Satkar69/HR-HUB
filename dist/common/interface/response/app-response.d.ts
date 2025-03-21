import { IResponseResult } from './interface/response.result.interface';
export declare class AppResponse<ResponseEntity> {
    statusCode: number;
    message: string;
    data: ResponseEntity;
    timestamp: Date;
    constructor(paginationResults: IResponseResult<ResponseEntity>);
}
