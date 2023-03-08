"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function signNumber(type) {
    return type === "plus" ? 1 : -1;
}
console.log(signNumber("plus"));
console.log(signNumber("minus"));
