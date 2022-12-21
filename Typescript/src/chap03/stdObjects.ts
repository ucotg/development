export {};

const d = new Date();
console.log(d);
console.log(d.getFullYear());
console.log(d.toISOString());

const timeNum = d.getTime();
console.log(timeNum);

const date2 = new Date(timeNum);
console.log(date2);
console.log(Date.now());
