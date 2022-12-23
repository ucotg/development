export {};

const map: Map<string, number> = new Map();
map.set("foo", 1234);

console.log(map.get("foo"));
console.log(map.get("bar"));
console.log(map);

type HasLength = { length: number };
const obj: HasLength = "foobar";
console.log(obj.length);
