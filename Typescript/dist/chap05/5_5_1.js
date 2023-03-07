"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("エラーを発生させます");
throwError();
console.log("エラーを発生させました");
function throwError() {
    const error = new Error("エラーが発生しました!!!!!");
    throw error;
}
