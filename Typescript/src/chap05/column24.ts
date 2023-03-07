export {};

const map = new Map<string, number>();

console.log(map instanceof Map);

class RepeatArray<T> extends Array<T> {
  repeat(times: number): RepeatArray<T> {
    const result = new RepeatArray<T>();
    for (let i = 0; i < times; i++) {
      result.push(...this);
    }
    return result;
  }
}

const arr = new RepeatArray(1, 2);

arr.push(3);

const repeated = arr.repeat(3);

console.log(repeated);
