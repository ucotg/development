/*
type FruitNumbers = {
    apple: number;
    orange: number;
    strawberry: number;
}
ユニオン型Fruitの各要素Pに対して、プロパティPがnumber型を持つようなオブジェクト型
*/
const numbers = {
    apple: 3,
    orange: 10,
    strawberry: 20,
};
const numbers2 = {
    apple: ["apple", "apple"],
    orange: ["orange", "orange", "orange"],
    strawberry: [],
};
export {};
