import { connect } from "http2";

export {};

class A {
  foo = 123;
  bar = this.foo + 100;
  getFoo() {
    return this.foo;
  }
}

const obj = new A();
console.log(obj.bar);
console.log(obj.bar, obj.getFoo());

class B {
  static foo = 123;
  static bar = this.foo * 2;
  static {
    console.log("bar is", this.bar);
  }
}
