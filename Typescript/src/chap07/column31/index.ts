import { increment, value } from "./counter";

increment();
console.log(`カウンタの値は${value}です`);
increment();
console.log(`カウンタの値は${value}です`);
increment();
console.log(`カウンタの値は${value}です`);

// value = 100; インポートであるため、'value' に割り当てることはできません。
