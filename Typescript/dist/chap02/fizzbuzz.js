"use strict";
/*
for(let i = 1; i <= 100; i++) {
    if(i % 15 === 0) {
        console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/
//改行なしバージョン
let result = "";
for (let i = 1; i <= 100; i++) {
    if (i > 1) {
        result += " ";
    }
    if (i % 15 === 0) {
        result += "FizzBuzz";
    }
    else if (i % 3 === 0) {
        result += "Fizz";
    }
    else if (i % 5 === 0) {
        result += "Buzz";
    }
    else {
        result += String(i);
    }
}
console.log(result);
