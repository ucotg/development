export {};

type Item = {
  name: string;
  price: number;
};

const apple: Item = {
  name: "りんご",
  price: 200,
};

const Item: Item = {
  // これはOK
  name: "りんご",
  price: 200,
};

const orange: Item = {
  name: "みかん",
  price: 150,
};

console.log(apple, orange);
console.log(Item);
