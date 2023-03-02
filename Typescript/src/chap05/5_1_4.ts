export {};

class User {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }

  //   setAge(newAge: number) {
  //     this.age = newAge;
  //   }
}

const uhyo = new User("uhyo", 26);
console.log(uhyo.name);
console.log(uhyo.isAdult());
