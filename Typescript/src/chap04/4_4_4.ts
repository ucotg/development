export {};

type Func = <T>(element: T, length: number) => T[];

const repeat: Func = function <T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};
