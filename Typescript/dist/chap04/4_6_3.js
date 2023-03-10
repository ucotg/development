function map(array, callback) {
    const result = [];
    for (const index of array) {
        result.push(callback(index));
    }
    return result;
}
function map2(array, callback) {
    const result = [];
    for (const index of array) {
        result.push(callback(index));
    }
    return result;
}
const data = [1, 1, 2, 3, 5, 8, 13];
const result = map(data, (x) => x * 10);
console.log(result);
const data2 = [1, -3, -2, 8, 0, -1];
const result2 = map2(data2, (x) => x >= 0);
console.log(result2);
export {};
