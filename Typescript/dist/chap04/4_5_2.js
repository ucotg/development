function sabayomi(age) {
    if (age >= 30) {
        const lie = age - 10;
        return lie;
    }
    if (age >= 20) {
        const lie = age - 5;
        return lie;
    }
    return age;
}
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    //   console.log(i); エラー
    return result;
}
function sabayomi2(age) {
    var lie = age;
    if (age >= 20) {
        var lie = age - 5;
    }
    return lie;
}
console.log(sabayomi2(30), sabayomi2(16));
export {};
