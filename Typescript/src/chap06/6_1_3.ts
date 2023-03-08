export {};

type Animal = {
  species: string;
  age: number;
};

type Human = Animal & {
  name: string;
};

const tama: Animal = {
  species: "Felis silvestris catus",
  age: 3,
};

const uhyo: Human = {
  species: "Homo sapiens sapiens",
  age: 26,
  name: "uhyo",
};

type StringAndNumber = string & number;
type AnimalAndString = Animal & string;

// const cat1: AnimalAndString = "cat";
// const cat2: AnimalAndString = {
//   species: "Felis silvestris catus",
//   age: 3,
// };
