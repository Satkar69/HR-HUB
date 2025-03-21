import { IPaginationQuery } from 'src/common/interface/response/interface/pagination.options.interface';
import { AppPagination } from '../../common/interface/response/app-pagination';
import { AppResponse } from '../../common/interface/response/app-response';
import { IPaginationData } from '../../common/interface/response/interface/response-data.interface';
export declare abstract class CoreApiResponse {
    static success<TData>(data: TData, statusCode?: number, message?: string): AppResponse<TData>;
    static pagination(paginationData: IPaginationData, query: IPaginationQuery, statusCode?: number, message?: string): AppPagination<any>;
}
export declare abstract class CoreWsResponse {
    static success<T>(data: T): {
        data: T;
        timestamp: string;
    };
}
