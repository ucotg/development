export {};

const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums));

const sum3 = (a: number, b: number, c: number) => a + b + c;

const nums3: [number, number, number] = [1, 2, 3];
console.log(sum3(...nums3));
