export declare class BaseEntity {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    toResponse(exclude?: string[]): this;
    static get REPOSITORY(): string;
}
