"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
rl.question("名前を入力してください:", (name) => {
    const displayname = name || "名無し";
    console.log(`こんにちは${displayname}さん`);
    rl.close();
});
