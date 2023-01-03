"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromAge = (age) => ({
    name: "John Smith",
    age,
});
const f = fromAge;
const obj = f(100);
console.log(obj);
