import { readFile, writeFile } from "fs/promises";

const fooContent = await readFile("foo.txt", "utf8");

await writeFile("out2.txt", fooContent + fooContent);
console.log("書き込みが完了しました");

export const bar = fooContent + fooContent;
