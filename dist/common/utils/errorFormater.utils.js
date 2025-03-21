"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatErrorMessage = void 0;
exports.toTitleCase = toTitleCase;
function toTitleCase(inputString) {
    const words = inputString.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}
const formatErrorMessage = (message) => {
    const [firstWord, ...rest] = message.split(' ');
    const words = firstWord.split(/(?=[A-Z])/);
    return `${words.map((w) => toTitleCase(w)).join(' ')} ${rest.join(' ')}`;
};
exports.formatErrorMessage = formatErrorMessage;
exports.default = {
    formatErrorMessage: exports.formatErrorMessage,
};
//# sourceMappingURL=errorFormater.utils.js.map