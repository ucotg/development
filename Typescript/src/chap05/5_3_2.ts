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

class PremiumUser extends User {
  rank: number;

  constructor(name: string, age: number, rank: number) {
    super(name, 100);
    this.rank = rank;
  }

  //   public isAdult(): boolean {
  //     return true;
  //   }
}

const john = new User("John Smith", 15);
const taro = new PremiumUser("Taro Yamada", 15, 1);

console.log(john.isAdult());
console.log(taro.isAdult());

const uhyo = new PremiumUser("uhyo", 26, 3);
console.log(uhyo.name);
console.log(uhyo.rank);
