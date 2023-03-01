export {};

function map(array: number[], callback: (x: number) => number): number[] {
  const result: number[] = [];
  for (const index of array) {
    result.push(callback(index));
  }
  return result;
}

function map2<X, Y>(array: X[], callback: (x: X) => Y): Y[] {
  const result: Y[] = [];
  for (const index of array) {
    result.push(callback(index));
  }
  return result;
}

const data = [1, 1, 2, 3, 5, 8, 13];
const result = map(data, (x) => x * 10);

console.log(result);

const data2 = [1, -3, -2, 8, 0, -1];
const result2: boolean[] = map2(data2, (x) => x >= 0);

console.log(result2);
