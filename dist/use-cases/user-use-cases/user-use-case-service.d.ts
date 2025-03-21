import { IDataServices } from 'src/core/abstracts';
export declare class UserUseCaseService {
    private dataServices;
    constructor(dataServices: IDataServices);
    getUserbyId(userId: number): Promise<import("../../core/models/user.model").UserModel>;
}
