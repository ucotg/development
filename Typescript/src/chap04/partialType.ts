export {};

type HasName = {
  name: string;
};
type HasNameAndAge = {
  name: string;
  age: number;
};

const fromAge = (age: number): HasNameAndAge => ({
  name: "John Smith",
  age,
});

const f: (age: number) => HasName = fromAge; // HasNameAndAgeを返すのであればHasNameを返すと見なしても良い
const obj: HasName = f(100);
console.log(obj);

type typeofh = (name: string) => { name: string };

const h = (name: string) => ({ name });
const g: (name: string) => void = h;

console.log(g("unko"));
