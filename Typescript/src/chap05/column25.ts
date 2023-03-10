export {};

try {
  throwNull();
} catch (err) {
  console.log(`${err}が投げられました`);
}

function throwNull() {
  throw null;
}

class EmptyArrayError extends Error {}

try {
  getAverage([1, 2, 3]);
  getAverage([]);
} catch (err) {
  if (err instanceof EmptyArrayError) {
    console.log("EmptyArrayErrorをキャッチしました");
  } else {
    throw err;
  }
}

function getAverage(nums: number[]) {
  if (nums.length === 0) {
    throw new EmptyArrayError("配列が空です");
  }
  return sum(nums) / nums.length;
}

function sum(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}
