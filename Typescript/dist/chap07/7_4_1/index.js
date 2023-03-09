"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const data = (0, fs_1.readFileSync)("./uhyo.txt", { encoding: "utf8" });
let count = 0;
let currentIndex = 0;
while (true) {
    const nextIndex = data.indexOf("uhyo", currentIndex);
    if (nextIndex >= 0) {
        count++;
        currentIndex = nextIndex + 1;
    }
    else {
        break;
    }
}
console.log(count);
