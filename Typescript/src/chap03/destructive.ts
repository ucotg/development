const obj = {
  str: "Hello, world!",
  num: 1234,
};

const nested = {
  num: 123,
  obj: {
    foo: "Hello",
    bar: "world",
  },
};

const { str: hello, num } = obj;
console.log(hello, num);
const {
  num: number,
  obj: { foo: foofoo },
} = nested;

console.log(number, foofoo);

const arr = [1, 2, 4, 8, 16, 32];

const [first, second, third] = arr;
console.log(first);
console.log(second);
console.log(third);
const [, foi, , baka, , basasi] = arr;
console.log(foi);
console.log(baka);
console.log(basasi);
const datas = {
  trial1: [
    [1, 2],
    [3, 4],
  ],
  trial2: [
    [2, 3],
    [4, 5],
  ],
};
console.log(datas.trial1[1][0]);

const tuple: [string, number] = ["uhyo", 26];

const [myName, age] = tuple;

console.log(myName);
console.log(age);
