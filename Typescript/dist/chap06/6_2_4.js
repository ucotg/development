const uhyo1 = "uhyo"; // "uhyo"型
let uhyo2 = "uhyo"; // string型
// uhyo2 = 3.13; エラー
let uhyo = "uhyo";
uhyo = "john";
uhyo = 3.14;
let uhyohyo = "uhyo";
const uhyo3 = {
    name: "uhyo",
    age: 26,
};
const uhyo4 = {
    name: "uhyo",
    age: 26,
};
const uhyo5 = {
    name: "uhyo",
    age: 26,
};
function signNumber(type) {
    return type === "plus" ? 1 : -1;
}
function useNumber(num) {
    return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
}
export {};
// signNumber("uhyo"); 型 '"uhyo"' の引数を型 '"plus" | "minus"' のパラメーターに割り当てることはできません。
// useNumber("uhyo"); 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。
