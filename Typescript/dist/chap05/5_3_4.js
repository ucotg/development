class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
class PremiumUser extends User {
    isAdult() {
        return this.age >= 10;
    }
}
const miniUhyo = new PremiumUser("uhyo", 15);
const john = new User("John Smith", 15);
console.log(miniUhyo.isAdult());
console.log(john.isAdult());
// console.log(john.age)
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._isAdult = age >= 20;
    }
    isAdult() {
        return this._isAdult;
    }
}
class PremiumUser2 extends User2 {
    setAge(newAge) {
        this.age = newAge;
    }
}
const uhyo = new PremiumUser2("uhyo", 26);
console.log(uhyo.isAdult());
uhyo.setAge(15);
console.log(uhyo.isAdult());
export {};
