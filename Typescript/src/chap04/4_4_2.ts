export {};

const repeat = function <T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

const repeat2 = <T>(element: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

const utils = {
  repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  },
};

const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
  left,
  right,
];
const p = pair<string, number>("uhyo", 26);

const repeat3 = <T extends { name: string }>(
  element: T,
  length: number
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

type HasNameAndAge = {
  name: string;
  age: number;
};

console.log(repeat3<HasNameAndAge>({ name: "uhyo", age: 26 }, 3));
// console.log(repeat3<string>("a", 5));
