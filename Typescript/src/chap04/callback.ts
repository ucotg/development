export {};

type User = { name: string; age: number };
// const getName = (u: User): string => {
//   console.log("u is", u);
//   return u.name;
// }; getNameがコールバック関数
const users: User[] = [
  { name: "uhyo", age: 26 },
  { name: "John Smith", age: 15 },
];

const names = users.map((u: User): string => u.name);
const adultUsers = users.filter((u: User) => u.age >= 20);
const allAdult = users.every((u: User) => u.age >= 20);
const seniorExist = users.some((u: User) => u.age >= 60);
const john = users.find((u: User) => u.name.startsWith("John"));
console.log(names, adultUsers, allAdult, seniorExist, john);
