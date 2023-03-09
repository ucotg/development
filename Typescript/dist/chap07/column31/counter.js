"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValue = exports.increment = exports.value = void 0;
exports.value = 0;
function increment() {
    return ++exports.value;
}
exports.increment = increment;
function getValue() {
    return exports.value;
}
exports.getValue = getValue;
