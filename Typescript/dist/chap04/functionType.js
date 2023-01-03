"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xRepeat = (num) => "x".repeat(num); // 型宣言での引数名と実際の引数名が一致している必要は無い。型が一致しているかどうかが重要
// const fun: F2 = (num: number): void => console.log(num); エラー
const xRepeat2 = (num) => "x".repeat(num);
const g = (num) => {
    for (let i = 0; i < num; i++) {
        console.log("Hello");
    }
};
function range(min, max) {
    const result = [];
    for (let i = min; i < max; i++) {
        result.push(i);
    }
    return result;
}
const arr = range(5, 10);
for (const value of arr) {
    console.log(value);
}
const xRepeat3 = (num) => "x".repeat(num);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = nums.filter((x) => x % 3 === 0); // (x)の()は省略可能
console.log(arr2);
