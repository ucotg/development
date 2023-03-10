class User {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
const MyUser = User;
const u = new MyUser();
console.log(u.name, u.age);
export {};
