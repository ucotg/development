var _User2_age, _SuperUser2_age;
class User1 {
    constructor() {
        this.age = 0;
    }
}
// class SuperUser1 extends User1 {
//   private age = 1;
// } // クラス 'SuperUser1' は基底クラス 'User1' を正しく拡張していません。複数の型に、プライベート プロパティ 'age' の異なる宣言が含まれています。
class User2 {
    constructor() {
        _User2_age.set(this, 0);
    }
}
_User2_age = new WeakMap();
class SuperUser2 extends User2 {
    constructor() {
        super(...arguments);
        _SuperUser2_age.set(this, 1);
    }
}
_SuperUser2_age = new WeakMap();
export {};
