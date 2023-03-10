const repeat = function (element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
const repeat2 = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
const utils = {
    repeat(element, length) {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    },
};
const pair = (left, right) => [
    left,
    right,
];
const p = pair("uhyo", 26);
const repeat3 = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
console.log(repeat3({ name: "uhyo", age: 26 }, 3));
export {};
// console.log(repeat3<string>("a", 5));
