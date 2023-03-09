"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
rl.question("文字列を入力してください:", (line) => {
    console.log(`${line}が入力されました`);
    rl.close();
});
