import PaginationResultInterface from './interface/pagination.result.interface';
export declare class AppPagination<PaginationEntity> {
    statusCode: number;
    message: string;
    data: PaginationEntity[];
    meta: any;
    constructor(paginationResults: PaginationResultInterface<PaginationEntity>);
}
