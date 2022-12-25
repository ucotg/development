export {};

const toLowerOrUpper = (str: string, upper?: boolean) => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper("Hello")); // upperにはundefinedが入る(=false)
console.log(toLowerOrUpper("Hello", true));
console.log(toLowerOrUpper("Hello", false));

// デフォルト値を指定して省略可能にする場合

const toLowerOrUpper2 = (str: string, upper: boolean = false) => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper2("Hello", undefined)); //この場合でもundefinedを渡せる

function foo(): void {}

type HasName = {
  name: string;
};
const obj: HasName = foo;
console.log(foo.name);
