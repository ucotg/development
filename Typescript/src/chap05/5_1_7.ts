export {};

class User {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class User2 {
  constructor(public name: string, private age: number) {} // 修飾子は必ず必要
}

// UserとUser2は同じ
