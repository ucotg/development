"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getHelloStr() {
    const rand = Math.random();
    if (rand < 0.3) {
        return `Hello, world!`;
    }
    else if (rand < 0.6) {
        return `Hello, my world!`;
    }
    else if (rand < 0.9) {
        return "Hello, w0rld!";
    }
    else {
        return `Hello, w!`;
    }
}
function makeKey(userName) {
    return `user:${userName}`;
}
const uhyoKey = makeKey("uhyo");
function fromKey(key) {
    return key.slice(5);
}
const user = fromKey("user:uhyo");
