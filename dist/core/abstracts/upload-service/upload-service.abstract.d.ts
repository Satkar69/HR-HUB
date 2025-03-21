export interface IUploadResponse {
    response: any;
    imageUrl: string;
}
export declare abstract class IUploadService {
    abstract uploadFile(file: any, folder: string): Promise<IUploadResponse>;
}
