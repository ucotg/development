function isStringOrNumber(value) {
    // 返り値をbooleanにするとエラーになる(絞り込みが行われないため)
    return typeof value === "string" || typeof value === "number";
}
const something = 123;
if (isStringOrNumber(something)) {
    console.log(something.toString());
}
function isHuman(value) {
    if (value == null)
        return false;
    return (value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number");
}
const uhyo = {
    type: "Human",
    name: "uhyo",
    age: 26,
};
console.log(isHuman(uhyo)); // true
function assertHuman(value) {
    if (value == null) {
        throw new Error("Given value is null or undefined");
    }
    if (value.type !== "Human" ||
        typeof value.name === "string" ||
        typeof value.age === "number") {
        throw new Error("Given value is not Human");
    }
}
function checkAndUseHuman(value) {
    assertHuman(value);
    const name = value.name; // valueはここからHuman型になる
}
export {};
