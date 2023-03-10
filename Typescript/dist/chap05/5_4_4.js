var _a;
class A {
    constructor() {
        this.foo = 123;
        this.bar = this.foo + 100;
    }
    getFoo() {
        return this.foo;
    }
}
const obj = new A();
console.log(obj.bar);
console.log(obj.bar, obj.getFoo());
class B {
}
_a = B;
B.foo = 123;
B.bar = _a.foo * 2;
(() => {
    console.log("bar is", _a.bar);
})();
export {};
