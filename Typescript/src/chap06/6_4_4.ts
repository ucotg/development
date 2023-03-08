export {};

type Obj = {
  0: string;
  1: number;
};

const obj: Obj = {
  0: "uhyo",
  "1": 26,
};

obj["0"] = "john";
obj[1] = 15;

type ObjKeys = keyof Obj;

function get<T, K extends keyof T & string>(obj: T, key: K): T[K] {
  const keyName: string = key;
  return obj[key];
}
