import { readFile } from "fs/promises";
import { performance } from "perf_hooks";

const p = readFile("foo.txt", "utf8");
const startTime = performance.now();

p.then((data) => {
  console.log(data);
  console.log(performance.now() - startTime);
});
