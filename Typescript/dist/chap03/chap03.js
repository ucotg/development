import { createInterface } from "readline";
const propName = "foo";
const obj = {
    [propName]: 123,
    "foo bar": -500,
    "↑↓↑↓": "",
    1: "one",
    2.05: "two point five",
};
console.log(obj["foo"]);
console.log(obj["foo bar"]);
console.log(obj["1"]);
console.log(obj["2.05"]);
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const messages = {
    good: "0以上の数値が入力されました!",
    bad: "負の数値を入力しないでください!",
};
rl.question("数値を入力してください:", (line) => {
    const num = Number(line);
    console.log(messages[num >= 0 ? "good" : "bad"]);
    rl.close();
});
