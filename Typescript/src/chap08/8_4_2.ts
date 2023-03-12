export {};

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function get3() {
  console.log("get3が呼び出されました");
  await sleep(1000);
  console.log("awaitの次に進みました");
  return 3;
}

console.log("get3を呼び出します");
const p = get3();
p.then((num) => {
  console.log(`num is ${num} `);
});
console.log("get3を呼び出しました");
