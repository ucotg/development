class User {
    constructor() {
        this.name = "";
        this.age = 0;
    }
    isAdult() {
        return this.age >= 20;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
const uhyo = new User();
const baby = new User();
console.log(uhyo.isAdult());
uhyo.setAge(26);
console.log(uhyo.isAdult());
console.log(baby.isAdult());
export {};
