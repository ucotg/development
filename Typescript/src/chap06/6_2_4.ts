export {};

const uhyo1 = "uhyo"; // "uhyo"型
let uhyo2 = "uhyo"; // string型
// uhyo2 = 3.13; エラー

let uhyo: string | number = "uhyo";

uhyo = "john";
uhyo = 3.14;

let uhyohyo: "uhyo" | "john" = "uhyo";

const uhyo3 = {
  name: "uhyo",
  age: 26,
};

type Human = {
  readonly name: string;
  readonly age: number;
};

const uhyo4: Human = {
  name: "uhyo",
  age: 26,
};

type Uhyo = {
  name: "uhyo";
  age: number;
};

const uhyo5: Uhyo = {
  name: "uhyo",
  age: 26,
};

function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}
function useNumber(num: number) {
  return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
}

// signNumber("uhyo"); 型 '"uhyo"' の引数を型 '"plus" | "minus"' のパラメーターに割り当てることはできません。
// useNumber("uhyo"); 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。
