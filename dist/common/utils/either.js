"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Either = void 0;
class Either {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    static left(value) {
        return new Either(value, null);
    }
    static right(value) {
        return new Either(null, value);
    }
    isLeft() {
        return this.left !== null;
    }
    isRight() {
        return this.right !== null;
    }
    getLeft() {
        return this.left;
    }
    getRight() {
        return this.right;
    }
}
exports.Either = Either;
//# sourceMappingURL=either.js.map