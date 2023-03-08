"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tama = {
    species: "Felis silvestris catus",
    age: "永遠の17歳",
};
const uhyo = {
    name: "uhyo",
    age: 26,
};
function showAge(user) {
    const age = user.age; // ageはstring | numberとなる
    console.log(age);
}
function useFunc(func) {
    const result = func("uhyo");
    console.log(result);
}
// type MaybeFunc = ((str: string) => string) | string;
// function useFunc2(func:MaybeFunc) {
//     const result = func("uhyo");
// }
