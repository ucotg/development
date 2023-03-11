import { performance } from "perf_hooks";
setTimeout(() => {
    console.log("タイマーが呼び出されました");
    console.log(`countが表示されてから${performance.now() - endTime}ミリ秒`);
}, 100);
const startTime = performance.now();
let count = 0;
while (performance.now() - startTime < 1000) {
    count++;
}
console.log(count);
const endTime = performance.now();
