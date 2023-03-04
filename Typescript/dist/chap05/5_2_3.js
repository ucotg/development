"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
const uhyo = new User();
console.log(uhyo instanceof User);
console.log({} instanceof User);
const john = {
    name: "John Smith",
    age: 15,
};
console.log(john instanceof User); // Userのインスタンスではないのでfalse
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function getPrice(customer) {
    if (customer instanceof User2) {
        if ((customer.name = "uhyo")) {
            return 0;
        }
    }
    return customer.age < 18 ? 1000 : 1800;
}
const customer1 = { age: 15 };
const customer2 = { age: 40 };
const uhyo2 = new User2("uhyo", 26);
console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(uhyo2));
