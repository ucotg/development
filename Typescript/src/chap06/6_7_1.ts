export {};

type HasToString = {
  toString: () => string;
};

function useToString1(value: HasToString) {
  console.log(`value is ${value.toString()}`);
}

useToString1({
  toString() {
    return "foo!";
  },
});

useToString1(3.14);

function useToString2(value: HasToString & object) {
  console.log(`value is ${value.toString()}`);
}

useToString2({
  toString() {
    return "foo!";
  },
});

// useToString2(3.14); 型 'number' の引数を型 'HasToString & object' のパラメーターに割り当てることはできません。型 'number' を型 'object' に割り当てることはできません。

function useNever(value: never) {
  // never型はどんな値にもあてはめることができる
  const num: number = value;
  const str: string = value;
  const obj: object = value;
  console.log(`value is ${value}`);
}

// useNever({});
useNever(3.14 as never);

function thrower(): never {
  throw new Error("error!!!!");
}

const result: never = thrower();

const str: string = result;
console.log(str);
