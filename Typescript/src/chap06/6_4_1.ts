export {};

type Human = {
  type: "human";
  name: string;
  age: bigint;
};

function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age,
  };
}

const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26n,
};

const uhyo2 = setAge(uhyo, 27n);
console.log(uhyo2);
