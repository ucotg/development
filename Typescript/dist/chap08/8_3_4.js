"use strict";
// const p = new Promise<number>((resolve) => {
//   setTimeout(() => {
//     resolve(100); // resolveが呼び出されると解決する
//   }, 3000);
// });
// p.then((num) => {
//   console.log(`結果は${num}`);
// });
// const sleep = (duration: number) => {
//   return new Promise<void>((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };
// sleep(3000).then(() => {
//   console.log("3秒経ちました");
// });
const sleepReject = (duration) => {
    return new Promise((sresolve, reject) => {
        setTimeout(reject, duration);
    });
};
sleepReject(3000).catch(() => {
    console.log("失敗!!!!");
});
