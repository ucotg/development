"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function helloWorldNTimes(n) {
    for (let i = 0; i < n; i++) {
        console.log("Hello, world!");
    }
}
helloWorldNTimes(5);
const calcBMI = function ({ height, weight }) {
    return weight / height ** 2;
};
const uhyo = { height: 1.84, weight: 72 };
console.log(calcBMI(uhyo));
