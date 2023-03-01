export {};

function makeTriple<T>(x: T, y: T, z: T): T[] {
  return [x, y, z];
}

const stringTriple = makeTriple("foo", "bar", "baz");

console.log(stringTriple);

// const mixed = makeTriple("foo", 123, false); エラー

function double<T>(func: (arg: T) => T): (arg: T) => T {
  return (arg) => func(func(arg));
}

type NumberToNumber = (arg: number) => number;

const plus2: NumberToNumber = double((x) => x + 1);
console.log(plus2(10));
