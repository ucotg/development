"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function func(mode, ...args) {
    console.log(mode, ...args);
}
func("string", "uhyo", "uhyo");
func("number", 1, 2, 3);
// func("string", 1, 2);
// func("number", "uhyo", "uhyo");
