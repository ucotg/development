"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function signNumber(type) {
    return type === "plus" ? 1 : -1;
}
function numberWithSign(num, type) {
    if (type === "none") {
        return 0;
    }
    else {
        return num * signNumber(type);
    }
}
console.log(numberWithSign(5, "plus"));
console.log(numberWithSign(5, "minus"));
console.log(numberWithSign(5, "none"));
function numberWithSign2(num, type) {
    if (type === "none") {
        return 0;
    }
    return num * signNumber(type);
}
function numberWithSign3(num, type) {
    return type === "none" ? 0 : num * signNumber(type);
}
