export {};

class User1 {
  private age = 0;
}

// class SuperUser1 extends User1 {
//   private age = 1;
// } // クラス 'SuperUser1' は基底クラス 'User1' を正しく拡張していません。複数の型に、プライベート プロパティ 'age' の異なる宣言が含まれています。

class User2 {
  #age = 0;
}

class SuperUser2 extends User2 {
  #age = 1;
}
