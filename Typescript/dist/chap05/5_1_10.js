var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _User_age;
console.log("Hello");
class C {
}
(() => {
    console.log("uhyo");
})();
console.log("world!");
class User {
    constructor() {
        _User_age.set(this, 0);
    }
    getAge() {
        return __classPrivateFieldGet(this, _User_age, "f");
    }
    setAge(age) {
        if (age < 0 || age > 150) {
            return;
        }
        __classPrivateFieldSet(this, _User_age, age, "f");
    }
}
_a = User, _User_age = new WeakMap();
(() => {
    _a.adminUser = new User();
    __classPrivateFieldSet(_a.adminUser, _User_age, 9999, "f");
})();
console.log(User.adminUser.getAge());
export {};
