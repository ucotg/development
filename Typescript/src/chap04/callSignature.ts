export {};

type MyFunc = {
  isUsed?: Boolean;
  (arg: number): void;
};

const double: MyFunc = (arg: number) => {
  console.log(arg * 2);
};

double.isUsed = true;
console.log(double.isUsed);
double(1000);

type SwapFunc = {
  (arg: number): boolean;
  (arg: string): number;
};
