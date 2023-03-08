"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setAge(human, age) {
    return {
        ...human,
        age,
    };
}
const uhyo = {
    type: "human",
    name: "uhyo",
    age: 26n,
};
const uhyo2 = setAge(uhyo, 27n);
console.log(uhyo2);
