import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("名前を入力してください:", (name) => {
    const displayname = name || "名無し";
    console.log(`こんにちは${displayname}さん`);
    rl.close();
});
