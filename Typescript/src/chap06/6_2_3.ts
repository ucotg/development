export {};

function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}

console.log(signNumber("plus"));
console.log(signNumber("minus"));
