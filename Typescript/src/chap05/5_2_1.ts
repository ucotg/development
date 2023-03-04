export {};

class User {
  name: string = "";
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }
}

const uhyo = new User();

const john: User = {
  name: "John Smith",
  age: 15,
  isAdult: () => true,
}; // これもOKだが、Userをクラス式で作った場合はエラーになる

class User2<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }
}

const uhyo2: User2<string> = new User2("uhyo", 26, "追加データ");
