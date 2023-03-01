"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function repeat(element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
const result = repeat("a", 5);
