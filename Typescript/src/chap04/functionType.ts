export {};

type F = (repeatNum: number) => string; // 関数型:(引数リスト) => 返り値の型

const xRepeat: F = (num: number): string => "x".repeat(num); // 型宣言での引数名と実際の引数名が一致している必要は無い。型が一致しているかどうかが重要

type F2 = (arg: string, arg2: string) => boolean;
// const fun: F2 = (num: number): void => console.log(num); エラー

const xRepeat2 = (num: number) => "x".repeat(num);

const g = (num: number) => {
  for (let i = 0; i < num; i++) {
    console.log("Hello");
  }
};

function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i < max; i++) {
    result.push(i);
  }
  return result;
}

const arr = range(5, 10);
for (const value of arr) {
  console.log(value);
}

type H = (arg: number) => string;

const xRepeat3: H = (num) => "x".repeat(num);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = nums.filter((x) => x % 3 === 0); // (x)の()は省略可能
console.log(arr2);
