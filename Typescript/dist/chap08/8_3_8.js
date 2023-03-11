import { readFile } from "fs/promises";
// const p = readFile("foo.txt", "utf8");
// const p2 = p.then((result) => result + result);
// p2.then((result) => {
//   console.log(result); // aiueoaiueo
// });
// const p2 = p.catch(() => "");
// p2.then((result) => {
//   console.log(result);
// });
readFile("foo.txt", "utf8")
    .catch(() => "")
    .then((result) => {
    console.log(result);
})
    .finally(() => {
    console.log("foo.txt is loaded?");
});
