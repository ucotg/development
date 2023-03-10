const toLowerOrUpper = (str, upper) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper("Hello")); // upperにはundefinedが入る(=false)
console.log(toLowerOrUpper("Hello", true));
console.log(toLowerOrUpper("Hello", false));
// デフォルト値を指定して省略可能にする場合
const toLowerOrUpper2 = (str, upper = false) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper2("Hello", undefined)); //この場合でもundefinedを渡せる
function foo() { }
const obj = foo;
console.log(foo.name);
export {};
