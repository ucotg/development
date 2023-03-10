function makeTriple(x, y, z) {
    return [x, y, z];
}
const stringTriple = makeTriple("foo", "bar", "baz");
console.log(stringTriple);
// const mixed = makeTriple("foo", 123, false); エラー
function double(func) {
    return (arg) => func(func(arg));
}
const plus2 = double((x) => x + 1);
console.log(plus2(10));
export {};
