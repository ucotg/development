export {};

type Human = {
  name: string;
  age?: number;
};

const uhyo: Human = {
  name: "uhyo",
  age: 26,
};

const john: Human = {
  name: "John Smith",
};

type Animal = {
  species: string;
};

const cat = {
  species: "Felis silvestris catus",
  age: "永遠の17歳",
};

const animal: Animal = cat;
console.log(animal);
