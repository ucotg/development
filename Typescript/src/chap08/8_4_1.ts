export {};

async function get3(): Promise<number> {
  console.log("get3が呼び出されました");
  return 3;
}

console.log("get3を呼び出します");
const p = get3();
p.then((num) => {
  console.log(`num is ${num}`);
});
console.log("get3を呼び出しました");

async function fail(): Promise<never> {
  throw new Error("Oh my god!!!!");
}

const p2 = fail();
p.catch((error: unknown) => {
  console.log(error);
});
