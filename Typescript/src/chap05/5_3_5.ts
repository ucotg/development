export {};

type HasName = {
  name: string;
};

class User implements HasName {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAsult(): boolean {
    return this.#age >= 20;
  }
}
