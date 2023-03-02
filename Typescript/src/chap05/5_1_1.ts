export {};

class User {
  name: string = "";
  age: number = 0;
} // クラス宣言に巻き上げは無い

const uhyo = new User();
console.log(uhyo.name);
console.log(uhyo.age);

uhyo.age = 26;
console.log(uhyo.age);

const obj = {
  cl: User,
};

const uhyo2 = new obj.cl();
console.log(uhyo2.age);
