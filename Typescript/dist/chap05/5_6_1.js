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
var _User2_name, _User2_age;
function createUser(name, age) {
    if (name === "") {
        throw new Error("名前は空にできません!");
    }
    return {
        name,
        age,
    };
}
function getMessage(user, message) {
    return `${user.name} (${user.age}) 「${message}」`;
}
const uhyo = createUser("uhyo", 26);
console.log(getMessage(uhyo, "こんにちは"));
class User2 {
    constructor(name, age) {
        _User2_name.set(this, void 0);
        _User2_age.set(this, void 0);
        if (name === "") {
            throw new Error("名前は空にできません!");
        }
        __classPrivateFieldSet(this, _User2_name, name, "f");
        __classPrivateFieldSet(this, _User2_age, age, "f");
    }
    getMessage(message) {
        return `${__classPrivateFieldGet(this, _User2_name, "f")} (${__classPrivateFieldGet(this, _User2_age, "f")}) 「${message}」`;
    }
}
_User2_name = new WeakMap(), _User2_age = new WeakMap();
const uhyo2 = new User2("uhyo", 26);
console.log(uhyo2.getMessage("こんにちは"));
export {};
