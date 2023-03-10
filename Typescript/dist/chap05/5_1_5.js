class User {
    static getAdminUser() {
        return new User(User.adminName, 26);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
User.adminName = "uhyo";
console.log(User.adminName);
const admin = User.getAdminUser();
console.log(admin.age);
console.log(admin.name);
const uhyo = new User("uhyo", 26);
export {};
// console.log(uhyo.adminName); エラー
