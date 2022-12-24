"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (...args) => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};
const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums));
const sum3 = (a, b, c) => a + b + c;
const nums3 = [1, 2, 3];
console.log(sum3(...nums3));
