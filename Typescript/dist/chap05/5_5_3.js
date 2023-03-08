"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function getAverage(nums: number[]) {
//   if (nums.length === 0) {
//     return undefined;
//   }
//   return sum(nums) / nums.length;
// }
try {
    throwError();
    console.log("これは表示されない");
}
catch (err) {
    console.log(err);
}
function throwError() {
    const error = new Error("エラーが発生しました!!!!!");
    throw error;
    console.log("これも表示されない");
}
try {
    const bigInt = BigInt("foobar");
    console.log(bigInt);
}
catch (err) {
    console.log(err);
}
