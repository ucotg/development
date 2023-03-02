export {};

class User {
  name?: string; // オプショナルでないクラスのプロパティ(フィールドともいう)は初期値が常に必要
  age: number = 0;
}

const uhyo = new User();
console.log(uhyo.name);
uhyo.name = "うひょ";
console.log(uhyo.name);
