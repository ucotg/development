console.log(typeof "uhyo");
console.log(typeof 26);
console.log(typeof {});
console.log(typeof undefined);
function formatNumberOrString(value) {
    if (typeof value === "number") {
        return value.toFixed(3);
    }
    else {
        return value;
    }
}
console.log(formatNumberOrString(3.14));
console.log(formatNumberOrString("uhyo"));
export {};
