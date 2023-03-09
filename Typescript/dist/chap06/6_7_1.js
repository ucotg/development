"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useToString1(value) {
    console.log(`value is ${value.toString()}`);
}
useToString1({
    toString() {
        return "foo!";
    },
});
useToString1(3.14);
function useToString2(value) {
    console.log(`value is ${value.toString()}`);
}
useToString2({
    toString() {
        return "foo!";
    },
});
// useToString2(3.14); 型 'number' の引数を型 'HasToString & object' のパラメーターに割り当てることはできません。型 'number' を型 'object' に割り当てることはできません。
function useNever(value) {
    // never型はどんな値にもあてはめることができる
    const num = value;
    const str = value;
    const obj = value;
    console.log(`value is ${value}`);
}
// useNever({});
useNever(3.14);
function thrower() {
    throw new Error("error!!!!");
}
const result = thrower();
const str = result;
console.log(str);
