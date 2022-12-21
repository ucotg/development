"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
/*
rl.question("文字列を入力してください:", (line) => {
    //文字列が入力されるとここが実行される
    console.log(`${line}が入力されました`);
    const result = line + 1000;
    console.log(result);
    rl.close()
});
*/
rl.question("数値を入力してください:", (line) => {
    const num = Number(line);
    const message = 0 <= num && num < 100
        ? `${num}は0以上100未満です`
        : `${num}は0以上100未満ではありません`;
    console.log(message);
    rl.close();
});
