import { readFile } from "fs/promises";

const repeat10 = (str: string) =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve(str.repeat(10)), 1000);
  });

// readFile("foo.txt", "utf8")
//   .then((result) => repeat10(result))
//   .then((result) => {
//     console.log(result);
//   });

const p1 = readFile("foo.txt", "utf8");
const p3 = p1.then((result) => {
  const p2 = repeat10(result);
  return p2;
});

p3.then((result) => {
  console.log(result);
});
