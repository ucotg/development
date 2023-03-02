"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
};
const uhyo = new User("uhyo", 26);
console.log(uhyo.name);
console.log(uhyo.isAdult());
