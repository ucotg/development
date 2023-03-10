export {};

type Animal = {
  species: string;
};
type Human = {
  name: string;
};

type User = Animal | Human;

const tama: User = {
  species: "Felis silvestris catus",
};

const uhyo: User = {
  name: "uhyo",
};

// const book: User = {
//   title: "Software Design",
// };
// 型 '{ title: string; }' を型 'User' に割り当てることはできません。オブジェクト リテラルは既知のプロパティのみ指定できます。'title' は型 'User' に存在しません。

// function getName(user: User): string {
//   return user.name;
// }
// プロパティ 'name' は型 'User' に存在しません。プロパティ 'name' は型 'Animal' に存在しません。
