async function main() {
    const { readFile, writeFile } = await import("fs/promises");
    try {
        const fooContent = await readFile("foo.txt", "utf8");
        await writeFile("out3.txt", fooContent + fooContent);
        console.log("書き込みが完了しました");
    }
    catch {
        console.log("失敗しました");
    }
}
// Promise<void>は最後まで処理が完了すると成功した扱いになる
main().then(() => {
    console.log("main()が成功しました");
});
export {};
