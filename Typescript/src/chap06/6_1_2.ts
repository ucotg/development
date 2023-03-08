export {};

type Animal = {
  species: string;
  age: string;
};

type Human = {
  name: string;
  age: number;
};

type User = Animal | Human;

const tama: User = {
  species: "Felis silvestris catus",
  age: "永遠の17歳",
};

const uhyo: User = {
  name: "uhyo",
  age: 26,
};

function showAge(user: User) {
  const age = user.age; // ageはstring | numberとなる
  console.log(age);
}

type MysteryFunc = ((str: string) => string) | ((str: string) => number);

function useFunc(func: MysteryFunc) {
  const result = func("uhyo");
  console.log(result);
}

// type MaybeFunc = ((str: string) => string) | string;

// function useFunc2(func:MaybeFunc) {
//     const result = func("uhyo");
// }
