import { IBcryptService } from 'src/core/abstracts/adapters/bcrypt.abstract';
export declare class BcryptService implements IBcryptService {
    rounds: number;
    hash(hashString: string): Promise<string>;
    compare(password: string, hashPassword: string): Promise<boolean>;
}
