export {};

class User {
  name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

class PremiumUser extends User {
  public isAdult(): boolean {
    return this.age >= 10;
  }
}

const miniUhyo = new PremiumUser("uhyo", 15);
const john = new User("John Smith", 15);

console.log(miniUhyo.isAdult());
console.log(john.isAdult());

// console.log(john.age)

class User2 {
  name: string;
  protected age: number;
  private _isAdult: boolean;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this._isAdult = age >= 20;
  }

  public isAdult(): boolean {
    return this._isAdult;
  }
}

class PremiumUser2 extends User2 {
  public setAge(newAge: number) {
    this.age = newAge;
  }
}

const uhyo = new PremiumUser2("uhyo", 26);
console.log(uhyo.isAdult());

uhyo.setAge(15);
console.log(uhyo.isAdult());
