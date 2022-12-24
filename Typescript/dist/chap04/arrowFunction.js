"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 普通に書く
// const calcBMI = ({ height, weight }: Human): number => {
//   return weight / height ** 2;
// };
//引数を省略
const calcBMI = ({ height, weight }) => weight / height ** 2;
const uhyo = { height: 1.84, weight: 72 };
console.log(calcBMI(uhyo));
const calcBMIObject = ({ height, weight }) => ({
    bmi: weight / height ** 2,
});
// メソッド記法
const obj = {
    double(num) {
        return num * 2;
    },
    //通常の記法(アロー関数)
    double2: (num) => num * 2,
};
console.log(obj.double(100));
console.log(obj.double2(-50));
// 可変長引数
const sum = (base, ...args) => {
    let result = base * 1000;
    for (const num of args) {
        result += num;
    }
    return result;
};
console.log(sum(1, 10, 100));
console.log(sum(123, 456));
console.log(sum(0));
// console.log(sum()); エラー
