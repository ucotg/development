const obj1 = {};
const obj2 = { foo: -1234 };
const { foo = 500 } = obj1; // 分割代入のデフォルト値
console.log(foo);
const { foo: bar = 500 } = obj2;
console.log(bar);
const objj = { foo: null };
const { foo: bara = 123 } = objj;
console.log(bara);
const nested1 = {
    obj: {
        foo: 123,
    },
};
const nested2 = {};
const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
console.log(foo1);
console.log(foo2);
const obj3 = {
    foo: 123,
    bar: "string",
    baz: false,
};
const { foo: foo3, ...aiueo } = obj3;
console.log(foo3);
console.log(aiueo);
console.log(aiueo.bar);
const arr = [1, 1, 2, 3, 5, 8, 13];
const [first, second, third, ...rest] = arr;
console.log(first);
console.log(second);
console.log(third);
console.log(rest);
export {};
