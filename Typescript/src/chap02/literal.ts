const binary = 0b1010; //2進数は先頭に0b、8進数は0o、16進数は0x
const octal = 0o755;
const hexadecimal = 0xff;
console.log(binary, octal, hexadecimal);

const big = 1e8; //指数標記
const small = 4e-5;
console.log(big,small);

console.log("Hello, \u{796d} World!");

const no: boolean = false;
const yes: boolean = true;
console.log(no, yes);

const x = "123,456,789".split(",")
console.log(x);
console.log(typeof(x));