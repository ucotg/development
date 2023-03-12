const sleep = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};
// async function get3() {
//   await sleep(1000);
//   return 3;
// }
// async function main() {
//   const num1 = await get3();
//   const num2 = await get3();
//   const num3 = await get3();
//   return num1 + num2 + num3;
// }
// main().then((result) => {
//   console.log(`result is ${result}`);
// });
async function main2() {
    const { readFile, writeFile } = await import("fs/promises");
    const fooContent = await readFile("foo.txt", "utf8");
    console.log("書き込みを開始します");
    await sleep(1000);
    await writeFile("out.txt", fooContent + fooContent);
    console.log("書き込み完了しました");
}
console.log("main2()を呼び出します");
main2().then((result) => {
    console.log("main2()が完了しました");
});
console.log("main2()を呼び出しました");
export {};
