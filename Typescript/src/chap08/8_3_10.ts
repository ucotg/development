import { readFile } from "fs/promises";

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

// const p1 = readFile("foo.txt", "utf8");
// const p2 = p1.then((result) => {
//   throw new Error("Error!!!!");
// });
// p2.then((result) => {
//   console.log(result);
// });

const p2 = readFile("foo.txt", "utf8")
  .then(() => sleepReject(1000))
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("エラーが発生しました", err);
  });
