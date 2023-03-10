const map = new Map();
console.log(map instanceof Map);
class RepeatArray extends Array {
    repeat(times) {
        const result = new RepeatArray();
        for (let i = 0; i < times; i++) {
            result.push(...this);
        }
        return result;
    }
}
const arr = new RepeatArray(1, 2);
arr.push(3);
const repeated = arr.repeat(3);
console.log(repeated);
export {};
