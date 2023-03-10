// const getName = (u: User): string => {
//   console.log("u is", u);
//   return u.name;
// }; getNameがコールバック関数
const users = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 15 },
];
const names = users.map((u) => u.name);
const adultUsers = users.filter((u) => u.age >= 20);
const allAdult = users.every((u) => u.age >= 20);
const seniorExist = users.some((u) => u.age >= 60);
const john = users.find((u) => u.name.startsWith("John"));
console.log(names, adultUsers, allAdult, seniorExist, john);
export {};
