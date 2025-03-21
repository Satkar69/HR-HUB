export declare class Either<L, R> {
    private left;
    private right;
    private constructor();
    static left<L, R>(value: L): Either<L, R>;
    static right<L, R>(value: R): Either<L, R>;
    isLeft(): boolean;
    isRight(): boolean;
    getLeft(): L | null;
    getRight(): R | null;
}
