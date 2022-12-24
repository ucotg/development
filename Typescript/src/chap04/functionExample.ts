export {};

function helloWorldNTimes(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log("Hello, world!");
  }
}

helloWorldNTimes(5);

type Human = {
  height: number;
  weight: number;
};
const calcBMI = function ({ height, weight }: Human): number {
  return weight / height ** 2;
};
const uhyo: Human = { height: 1.84, weight: 72 };

console.log(calcBMI(uhyo));
