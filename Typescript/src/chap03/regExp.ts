export {};

const r = /ab+c/;

console.log(r.test("abbbbbc"));
console.log(r.test("Hello, abc world!"));
console.log(r.test("ABC"));

const r2 = /^abc/;

console.log(r2.test("abcdefg"));
console.log(r2.test("Hello, abcdefg"));

console.log("Hello, abbbbbbc world! abbc".replace(/ab+c/, "foobar"));
console.log("Hello, abbbbbbc world! abbc".replace(/ab+c/g, "foobar"));
console.log("Hello, abbbbbbc world! abbc".replace("world", "foobar"));

const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/);
if (result != null) {
  console.log(result[0]);
  console.log(result[1]);
  console.log(result);
}

const result2 = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/);
if (result2 != null) {
  console.log(result2);
  console.log(result2.groups);
}

const result3 = "Hello, abbbbbbc world! abc".match(/a(b+)c/g);
if (result3 != null) {
  console.log(result3);
}
