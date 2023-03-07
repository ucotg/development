"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_age;
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        _User_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _User_age, age, "f");
    }
    isAdult() {
        return __classPrivateFieldGet(this, _User_age, "f") >= 20;
    }
}
_User_age = new WeakMap();
const uhyo = new User("uhyo", 26);
const john = new User("John Smith", 15);
console.log(uhyo.isAdult === john.isAdult);
const user = {
    name: "uhyo",
    age: 26,
    isAdult() {
        return this.age >= 20;
    },
};
console.log(user.isAdult());
user.age = 15;
console.log(user.isAdult());
// const userIsAdult = user.isAdult;
// console.log(userIsAdult()); ランタイムエラー
