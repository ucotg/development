export {};

function sabayomi(age: number) {
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

function sum(arr: number[]) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  //   console.log(i); エラー
  return result;
}

function sabayomi2(age: number) {
  var lie = age;
  if (age >= 20) {
    var lie = age - 5;
  }
  return lie;
}

console.log(sabayomi2(30), sabayomi2(16));
