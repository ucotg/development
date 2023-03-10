try {
    console.log("tryブロック");
}
catch (err) {
    console.log("catchブロック");
}
finally {
    console.log("finallyブロック");
}
try {
    console.log("tryブロック");
}
finally {
    console.log("finallyブロック");
}
// try {
//   console.log("エラーを発生させます");
//   throwError();
//   console.log("エラーを発生させました");
// } finally {
//   console.log("finallyブロック");
// }
// console.log("try文の後ろ");
// function throwError() {
//   throw new Error("エラーが発生しました!!!!!");
// }
console.log(sum(100));
function sum(max) {
    try {
        let result = 0;
        for (let i = 1; i <= max; i++) {
            result += i;
        }
        return result;
    }
    finally {
        console.log("sumから脱出します");
    }
}
export {};
