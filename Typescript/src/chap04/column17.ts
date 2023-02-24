export {};

type HasName = { name: string };
type HasNameAndAge = {
  name: string;
  age: number;
};
type Obj = {
  func: (arg: HasName) => string; // 通常の関数型
  method(arg: HasName): string; // メソッド記法
};

const something: Obj = {
  func: (user) => user.name,
  method: (user) => user.name,
};

const getAge = (user: HasNameAndAge) => String(user.age);

// something.func = getAge; これはエラー
something.method = getAge;
