import { readFile } from "fs/promises";
const p = readFile("foo.txt", "utf8");
// p.then((result) => {
//   console.log("1");
// });
// p.then((result) => {
//   console.log("2");
// });
// p.then((result) => {
//   console.log("3");
// });
p.then((result) => {
    console.log("成功", result);
}, (error) => {
    console.log("失敗", error);
});
// then(成功時の関数,失敗時の関数)
