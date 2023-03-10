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
class PremiumUser extends User {
    constructor(name, age, rank) {
        super(name, 100);
        this.rank = rank;
    }
}
const john = new User("John Smith", 15);
const taro = new PremiumUser("Taro Yamada", 15, 1);
console.log(john.isAdult());
console.log(taro.isAdult());
const uhyo = new PremiumUser("uhyo", 26, 3);
console.log(uhyo.name);
console.log(uhyo.rank);
export {};
