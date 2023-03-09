export {};

type Fruit = "apple" | "orange" | "strawberry";

type FruitNumbers = {
  [P in Fruit]: number;
};

/*
type FruitNumbers = {
    apple: number;
    orange: number;
    strawberry: number;
}
ユニオン型Fruitの各要素Pに対して、プロパティPがnumber型を持つようなオブジェクト型
*/

const numbers: FruitNumbers = {
  apple: 3,
  orange: 10,
  strawberry: 20,
};

type FruitArrays = {
  [P in Fruit]: P[];
};

const numbers2: FruitArrays = {
  apple: ["apple", "apple"],
  orange: ["orange", "orange", "orange"],
  strawberry: [],
};
