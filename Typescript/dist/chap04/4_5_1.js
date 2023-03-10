const repeatLength = 5;
const repeat = function (element) {
    const repeatLength = 3;
    const result = [];
    for (let i = 0; i < repeatLength; i++) {
        result.push(element);
    }
    return result;
};
console.log(repeat("a"));
console.log(repeatLength); // 3
export {};
