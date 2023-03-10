const fromAge = (age) => ({
    name: "John Smith",
    age,
});
const f = fromAge; // HasNameAndAgeを返すのであればHasNameを返すと見なしても良い
const obj = f(100);
console.log(obj);
const h = (name) => ({ name });
const g = h;
console.log(g("unko"));
export {};
