"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const counter_1 = require("./counter");
(0, counter_1.increment)();
console.log(`カウンタの値は${counter_1.value}です`);
(0, counter_1.increment)();
console.log(`カウンタの値は${counter_1.value}です`);
(0, counter_1.increment)();
console.log(`カウンタの値は${counter_1.value}です`);
// value = 100; インポートであるため、'value' に割り当てることはできません。
