"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFizzBuzzString(i) {
    if (i % 15 === 0) {
        return "FizzBuzz";
    }
    else if (i % 3 === 0) {
        return "Fizz";
    }
    else if (i % 5 === 0) {
        return "Buzz";
    }
    else {
        return i;
    }
}
const sequence = (first, end) => {
    const result = [];
    for (let i = first; i <= end; i++) {
        result.push(i);
    }
    return result;
};
for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
}
