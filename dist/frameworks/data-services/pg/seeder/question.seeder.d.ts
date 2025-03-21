import { Repository } from 'typeorm';
import { QuestionEntity } from '../entities/question.entity';
export declare class QuestionSeeder {
    constructor();
    seed(repository: Repository<QuestionEntity>): Promise<void>;
}
