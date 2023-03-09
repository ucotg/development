"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.increment = void 0;
let value = 0;
console.log("running counter.ts");
function increment() {
    return ++value;
}
exports.increment = increment;
