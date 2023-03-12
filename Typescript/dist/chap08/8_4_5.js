"use strict";
const main = async function () {
    const { readFile, writeFile } = await import("fs/promises");
    try {
        const fooContent = await readFile("foo.txt", "utf8");
        await writeFile("out3.txt", fooContent + fooContent);
        console.log("書き込みが完了しました");
    }
    catch {
        console.log("失敗しました");
    }
};
const main2 = async () => {
    const { readFile, writeFile } = await import("fs/promises");
    try {
        const fooContent = await readFile("foo.txt", "utf8");
        await writeFile("out3.txt", fooContent + fooContent);
        console.log("書き込みが完了しました");
    }
    catch {
        console.log("失敗しました");
    }
};
