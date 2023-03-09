export {};

type T = Readonly<{
  name: string;
  age: number;
}>;

type U = Partial<{
  name: string;
  age: number;
}>;

type V = Pick<
  {
    name: string;
    age: number;
  },
  "age" | "name"
>;

type Union = "uhyo" | "hyo" | 1 | 2 | 3;

type W = Extract<Union, string>;

type X = Exclude<Union, string>;
