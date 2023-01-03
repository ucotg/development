"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const double = (arg) => {
    console.log(arg * 2);
};
double.isUsed = true;
console.log(double.isUsed);
double(1000);
