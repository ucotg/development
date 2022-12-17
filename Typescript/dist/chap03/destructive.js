"use strict";
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
const { num: number, obj: { foo: foofoo }, } = nested;
console.log(number, foofoo);
