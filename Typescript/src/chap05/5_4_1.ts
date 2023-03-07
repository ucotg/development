export {};

class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

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
